type Props = {
  nome: string
  cargo: string
  imagem: string
  rm: string
  linkedin: string
  github: string
}

export default function IntegrantesCard({
  nome,
  cargo,
  imagem,
  rm,
  linkedin,
  github
}: Props) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg sm:p-6">
      <img
        src={imagem}
        alt={nome}
        className="mx-auto mb-4 h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
      />

      <h3 className="text-lg font-bold leading-7 text-gray-900 sm:text-xl">
        {nome}
      </h3>

      <p className="mb-2 text-sm leading-6 text-gray-600 sm:text-base">
        {cargo}
      </p>

      <p className="mb-4 text-sm leading-6 text-gray-500">
        {rm}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href={linkedin} target="_blank" className="text-sm text-blue-600 hover:underline sm:text-base">
          LinkedIn
        </a>
        <a href={github} target="_blank" className="text-sm text-gray-800 hover:underline sm:text-base">
          GitHub
        </a>
      </div>
    </div>
  )
}
