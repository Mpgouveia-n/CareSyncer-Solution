import { promises as fs } from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { compile } from 'tailwindcss'

const sourceFilePattern = /\.(html|tsx?|jsx?)$/
const candidatePattern = /[A-Za-z0-9_:/.[\]()%#,-]+/g

async function collectCandidates(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const candidates = new Set<string>()

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== '.git') {
        for (const candidate of await collectCandidates(fullPath)) {
          candidates.add(candidate)
        }
      }

      continue
    }

    if (!sourceFilePattern.test(entry.name)) {
      continue
    }

    const content = await fs.readFile(fullPath, 'utf8')
    const matches = content.match(candidatePattern) ?? []

    for (const match of matches) {
      candidates.add(match)
    }
  }

  return [...candidates]
}

function tailwindCssPlugin(): Plugin {
  return {
    name: 'caresyncer-tailwindcss',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('src/index.css')) {
        return null
      }

      const compiler = await compile(code, {
        base: process.cwd(),
        from: id,
        async loadStylesheet(stylesheetId, base) {
          const stylesheetPath =
            stylesheetId === 'tailwindcss'
              ? path.resolve(process.cwd(), 'node_modules/tailwindcss/index.css')
              : path.resolve(base, stylesheetId)

          return {
            path: stylesheetPath,
            base: path.dirname(stylesheetPath),
            content: await fs.readFile(stylesheetPath, 'utf8'),
          }
        },
      })

      return {
        code: compiler.build(await collectCandidates(process.cwd())),
        map: null,
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindCssPlugin()],
})
