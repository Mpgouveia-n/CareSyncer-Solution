import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import HeroHome from "../../Componentes/HeroHome/HeroHome"

export default function Home() {
  useFadeIn()

  return (
    <div className="w-full bg-[#d8f0db] fade-in">
      <HeroHome />

      <section id="sobre-projeto" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 xl:px-16">
        <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-[#FB8C00] sm:text-3xl md:mb-6 md:text-4xl">
            Quem é a Turma do Bem?
          </h2>

          <p className="mb-4 text-base leading-7 text-gray-700 sm:text-lg md:leading-8">
            A <strong>Turma do Bem</strong> é uma organização sem fins lucrativos que
            conecta dentistas voluntários a pessoas em situação de vulnerabilidade social.
          </p>

          <p className="text-base leading-7 text-gray-700 sm:text-lg md:leading-8">
            Com milhares de profissionais cadastrados, a rede promove acesso a
            tratamentos odontológicos para quem mais precisa.
          </p>
        </div>
      </section>

      <section id="funcionalidades" className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-6xl rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-[#2E7D32] sm:text-3xl md:mb-6 md:text-4xl">
            O Desafio
          </h2>

          <p className="mx-auto max-w-3xl text-center text-base leading-7 text-gray-700 sm:text-lg md:leading-8">
            Atualmente o processo de triagem e comunicação ainda depende de métodos
            manuais, o que pode gerar atrasos no atendimento e dificuldades no
            acompanhamento dos pacientes.
          </p>
        </div>
      </section>

      <section id="cadastro" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 xl:px-16">
        <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-[#FB8C00] sm:text-3xl md:mb-6 md:text-4xl">
            A Solução: CareSyncer
          </h2>

          <p className="mx-auto max-w-3xl text-center text-base leading-7 text-gray-700 sm:text-lg md:leading-8">
            O <strong>CareSyncer</strong> digitaliza e organiza o fluxo de atendimento,
            conectando pacientes e dentistas de forma mais rápida, transparente e eficiente.
          </p>
        </div>
      </section>
    </div>
  )
}
