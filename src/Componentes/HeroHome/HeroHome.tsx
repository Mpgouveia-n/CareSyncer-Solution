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
    <section className="relative min-h-[72vh] w-full overflow-hidden sm:min-h-[78vh] md:min-h-[85vh] lg:min-h-screen">
      <img
        src={slides[slideIndex]}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover brightness-[55%]"
      />

      <div className="absolute left-1/2 top-1/2 w-[min(88vw,36rem)] -translate-x-1/2 -translate-y-1/2 text-center text-white sm:w-[min(82vw,40rem)] md:left-[10%] md:w-auto md:max-w-xl md:translate-x-0 md:text-left">
        <h1 className="mb-4 text-3xl font-bold leading-tight drop-shadow-lg sm:text-4xl md:text-5xl lg:text-5xl">
          Turma do Bem & CareSyncer
        </h1>

        <p className="mb-6 text-base leading-7 drop-shadow-md sm:text-lg md:text-xl">
          Tecnologia conectando pacientes e dentistas voluntários
        </p>

        <a href="#sobre-projeto" className="inline-block rounded-full bg-[#FB8C00] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#E86E00] sm:px-8">
          Saiba mais
        </a>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-2xl text-white transition hover:bg-black/55 sm:h-11 sm:w-11 sm:text-3xl md:left-6"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-2xl text-white transition hover:bg-black/55 sm:h-11 sm:w-11 sm:text-3xl md:right-6"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 sm:bottom-8">
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
