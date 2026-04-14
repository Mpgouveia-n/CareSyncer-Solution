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
    <section className="relative h-[80vh] w-full overflow-hidden">

      <img
        src={slides[slideIndex]}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-xl">
        <h1 className="text-5xl font-bold mb-4">
          Turma do Bem & CareSyncer
        </h1>

        <p className="text-xl mb-6">
          Tecnologia conectando pacientes e dentistas voluntários
        </p>

        <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Saiba mais
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 text-white text-3xl"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 text-white text-3xl"
      >
        ❯
      </button>

    </section>
  )
}