import { Link, useParams } from "react-router-dom"
import Hero from "../../Componentes/Hero/Hero"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import heroImg from "../../assets/Imagens/ImagensHeros/hero funcionalidades .png"

type ProcedimentoDetalhe = {
  nome: string
  descricao: string
  quandoIndicado: string
  acompanhamento: string
}

const procedimentos: Record<string, ProcedimentoDetalhe> = {
  limpeza: {
    nome: "Limpeza",
    descricao: "Procedimento preventivo para remover placa bacteriana, manchas superficiais e tártaro.",
    quandoIndicado: "Indicada para manutenção da saúde bucal e prevenção de gengivite, cáries e mau hálito.",
    acompanhamento: "No CareSyncer, a limpeza pode ser registrada como atendimento preventivo e acompanhada no histórico do paciente."
  },
  obturacao: {
    nome: "Obturação",
    descricao: "Restauração usada para recuperar dentes afetados por cáries ou pequenas perdas de estrutura.",
    quandoIndicado: "Indicada quando há cavidades, sensibilidade ou danos localizados que ainda permitem preservar o dente.",
    acompanhamento: "A plataforma ajuda a registrar o dente tratado, prioridade clínica e retorno necessário."
  },
  extracao: {
    nome: "Extração",
    descricao: "Remoção de um dente comprometido quando outras alternativas de preservação não são suficientes.",
    quandoIndicado: "Indicada em casos de dor intensa, infecção, fratura grave ou impossibilidade de restauração.",
    acompanhamento: "O procedimento pode ser acompanhado com observações de pós-atendimento e encaminhamentos."
  },
  avaliacao: {
    nome: "Avaliação odontológica",
    descricao: "Consulta inicial para identificar necessidades, urgências e próximos passos do tratamento.",
    quandoIndicado: "Indicada para novos pacientes, triagens sociais e definição de prioridade no fluxo de atendimento.",
    acompanhamento: "No CareSyncer, a avaliação organiza o início da jornada do paciente até o atendimento voluntário."
  }
}

export default function ProcedimentoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const procedimento = id ? procedimentos[id] : undefined
  useFadeIn()

  if (!procedimento) {
    return (
      <div className="fade-in bg-[#d8f0db]">
        <Hero
          titulo="Procedimento não encontrado"
          descricao="Não localizamos informações para o procedimento solicitado."
          imagem={heroImg}
        />

        <section className="mx-auto max-w-4xl px-4 py-14 text-center">
          <div className="rounded-2xl bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <p className="mb-6 text-lg text-gray-700">
              Verifique o endereço acessado ou volte para a lista de procedimentos.
            </p>

            <Link
              to="/procedimentos"
              className="inline-block rounded-full bg-[#FB8C00] px-6 py-3 font-semibold text-white transition hover:bg-[#E86E00]"
            >
              Ver procedimentos
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="fade-in bg-[#d8f0db]">
      <Hero
        titulo={procedimento.nome}
        descricao="Detalhes do procedimento odontológico no fluxo de atendimento social."
        imagem={heroImg}
      />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-gray-300 p-5">
              <h2 className="mb-3 text-xl font-bold text-[#FB8C00]">
                Descrição
              </h2>
              <p className="leading-7 text-gray-700">
                {procedimento.descricao}
              </p>
            </article>

            <article className="rounded-xl border border-gray-300 p-5">
              <h2 className="mb-3 text-xl font-bold text-[#2E7D32]">
                Indicação
              </h2>
              <p className="leading-7 text-gray-700">
                {procedimento.quandoIndicado}
              </p>
            </article>

            <article className="rounded-xl border border-gray-300 p-5">
              <h2 className="mb-3 text-xl font-bold text-[#FB8C00]">
                CareSyncer
              </h2>
              <p className="leading-7 text-gray-700">
                {procedimento.acompanhamento}
              </p>
            </article>
          </div>

          <Link
            to="/procedimentos"
            className="mt-8 inline-block rounded-full bg-[#FB8C00] px-6 py-3 font-semibold text-white transition hover:bg-[#E86E00]"
          >
            Voltar para procedimentos
          </Link>
        </div>
      </section>
    </div>
  )
}
