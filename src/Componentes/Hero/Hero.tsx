type Props = {
  titulo: string
  descricao: string
  imagem: string
}

export default function Hero({ titulo, descricao, imagem }: Props) {
  return (
    <section className="relative h-[42vh] min-h-72 w-full overflow-hidden sm:h-[46vh] md:h-[52vh] lg:h-[50vh]">
      <img
        src={imagem}
        alt="Hero"
        className="h-full w-full object-cover brightness-50"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h1 className="mb-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:mb-4 lg:text-5xl">
          {titulo}
        </h1>

        <p className="max-w-2xl text-base leading-7 sm:text-lg md:text-xl">
          {descricao}
        </p>
      </div>
    </section>
  )
}
