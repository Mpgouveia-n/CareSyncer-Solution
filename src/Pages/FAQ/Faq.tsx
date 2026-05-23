import { useState } from "react"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import Hero from "../../Componentes/Hero/Hero"
import heroImg from "../../assets/Imagens/ImagensHeros/hero FAQ.jpg"

export default function Faq() {
  useFadeIn()

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      pergunta: "O que é o CareSyncer?",
      resposta:
        "O CareSyncer é uma plataforma para gerenciamento de pacientes e dentistas voluntários."
    },
    {
      pergunta: "Quem pode utilizar a plataforma?",
      resposta:
        "Dentistas voluntários, administradores e pacientes encaminhados pela Turma do Bem."
    },
    {
      pergunta: "O sistema é gratuito?",
      resposta:
        "Sim, o sistema é voltado para projetos sociais e não possui custo para os usuários."
    },
    {
      pergunta: "Como posso me cadastrar?",
      resposta:
        "Você pode entrar em contato com a equipe pela página de contato."
    }
  ]

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="fade-in bg-[#d8f0db] lg:bg-white">
      <Hero
        titulo="Perguntas Frequentes"
        descricao="Tire suas dúvidas sobre o CareSyncer e a proposta da solução."
        imagem={heroImg}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-8 lg:py-20">
        <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-8 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <button
              className="flex w-full items-start justify-between gap-4 text-left text-base font-semibold leading-7 sm:text-lg md:text-xl"
              onClick={() => toggleFAQ(index)}
            >
              {faq.pergunta}
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-7 text-gray-600 sm:text-base">{faq.resposta}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
