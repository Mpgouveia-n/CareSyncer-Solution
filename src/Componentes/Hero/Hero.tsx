type Props = {
  titulo: string
  descricao: string
  imagem: string
}

export default function Hero({ titulo, descricao, imagem }: Props) {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">

      <img
        src={imagem}
        alt="Hero"
        className="w-full h-full object-cover brightness-50"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {titulo}
        </h1>

        <p className="text-lg max-w-xl">
          {descricao}
        </p>

      </div>

    </section>
  )
}