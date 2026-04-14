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
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">

      <img
        src={imagem}
        alt={nome}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

      <h3 className="text-xl font-bold">{nome}</h3>

      <p className="text-gray-600 mb-2">{cargo}</p>

      <p className="text-sm text-gray-500 mb-4">{rm}</p>

      <div className="flex justify-center gap-4">
        <a href={linkedin} target="_blank" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        <a href={github} target="_blank" className="text-gray-800 hover:underline">
          GitHub
        </a>
      </div>

    </div>
  )
}