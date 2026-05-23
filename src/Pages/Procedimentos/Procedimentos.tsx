import { useNavigate } from "react-router-dom"
import Hero from "../../Componentes/Hero/Hero"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import heroImg from "../../assets/Imagens/ImagensHeros/hero funcionalidades .png"

type Procedimento = {
  id: string
  nome: string
  resumo: string
  destaque: string
}

const procedimentos: Procedimento[] = [
  {
    id: "limpeza",
    nome: "Limpeza",
    resumo: "Remoção de placa bacteriana e tártaro para prevenção de doenças bucais.",
    destaque: "Preventivo"
  },
  {
    id: "obturacao",
    nome: "Obturação",
    resumo: "Restauração do dente afetado por cárie ou pequenas fraturas.",
    destaque: "Restaurador"
  },
  {
    id: "extracao",
    nome: "Extração",
    resumo: "Remoção segura de dentes quando não há possibilidade de preservação.",
    destaque: "Cirúrgico"
  },
  {
    id: "avaliacao",
    nome: "Avaliação odontológica",
    resumo: "Primeira análise clínica para entender necessidades e definir prioridades.",
    destaque: "Triagem"
  }
]

export default function Procedimentos() {
  const navigate = useNavigate()
  useFadeIn()

  return (
    <div className="fade-in bg-[#d8f0db]">
      <Hero
        titulo="Procedimentos"
        descricao="Conheça os principais procedimentos odontológicos acompanhados pelo CareSyncer."
        imagem={heroImg}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {procedimentos.map((procedimento) => (
            <article
              key={procedimento.id}
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
            >
              <span className="mb-4 w-fit rounded-full bg-[#FB8C00]/10 px-3 py-1 text-sm font-semibold text-[#FB8C00]">
                {procedimento.destaque}
              </span>

              <h2 className="mb-3 text-2xl font-bold text-[#2E7D32]">
                {procedimento.nome}
              </h2>

              <p className="mb-6 flex-1 text-base leading-7 text-gray-700">
                {procedimento.resumo}
              </p>

              <button
                type="button"
                onClick={() => navigate(`/procedimentos/${procedimento.id}`)}
                className="w-fit rounded-full bg-[#FB8C00] px-6 py-3 font-semibold text-white transition hover:bg-[#E86E00]"
              >
                Ver detalhes
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
