import { useState } from "react"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import Hero from "../../Componentes/Hero/Hero"
import heroImg from "../../assets/Imagens/HeroPages/hero-faq.png"

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
    <div className="fade-in">
      <Hero
        titulo="Perguntas Frequentes"
        descricao="Tire suas dúvidas sobre o CareSyncer e a proposta da solução."
        imagem={heroImg}
      />

      <div className="py-20 px-8 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <button
              className="w-full text-left text-xl font-semibold flex justify-between items-center"
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
              <p className="text-gray-600">{faq.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}