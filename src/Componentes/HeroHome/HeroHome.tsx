import { useState } from "react"

import slide1 from "../../assets/Imagens/CarroselHome/home-carrosel-slide01.png"
import slide2 from "../../assets/Imagens/CarroselHome/home-carrosel-slide02.png"
import slide3 from "../../assets/Imagens/CarroselHome/home-carrosel-slide03.jpg"

export default function HeroHome() {
  const slides = [slide1, slide2, slide3]
  const [slideIndex, setSlideIndex] = useState(0)

  function nextSlide() {
    setSlideIndex((prev) => (prev + 1) % slides.length)
  }

  function prevSlide() {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden md:min-h-screen">
      <img
        src={slides[slideIndex]}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover brightness-[55%]"
      />

      <div className="absolute left-6 top-1/2 max-w-xl -translate-y-1/2 text-white sm:left-10 md:left-[10%]">
        <h1 className="mb-4 text-3xl font-bold leading-tight drop-shadow-lg sm:text-4xl md:text-5xl">
          Turma do Bem & CareSyncer
        </h1>

        <p className="mb-6 text-base drop-shadow-md sm:text-lg md:text-xl">
          Tecnologia conectando pacientes e dentistas voluntários
        </p>

        <a href="#sobre-projeto" className="inline-block rounded-full bg-[#FB8C00] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#E86E00]">
          Saiba mais
        </a>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-3xl text-white transition hover:bg-black/55 md:left-6"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-3xl text-white transition hover:bg-black/55 md:right-6"
      >
        ›
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              slideIndex === index ? "bg-[#FB8C00]" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
