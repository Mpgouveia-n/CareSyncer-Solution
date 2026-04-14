import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import HeroHome from "../../Componentes/HeroHome/HeroHome"

export default function Home() {
  useFadeIn()

  return (
    <div className="w-full fade-in">
      {/* HERO */}
      <HeroHome />

      {/* SOBRE */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 text-center">
          Quem é a Turma do Bem?
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-4 leading-7 md:leading-8">
          A <strong>Turma do Bem</strong> é uma organização sem fins lucrativos que
          conecta dentistas voluntários a pessoas em situação de vulnerabilidade social.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-7 md:leading-8">
          Com milhares de profissionais cadastrados, a rede promove acesso a
          tratamentos odontológicos para quem mais precisa.
        </p>
      </section>

      {/* DESAFIO */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 text-center">
            O Desafio
          </h2>

          <p className="text-base sm:text-lg text-gray-700 text-center max-w-3xl mx-auto leading-7 md:leading-8">
            Atualmente o processo de triagem e comunicação ainda depende de métodos
            manuais, o que pode gerar atrasos no atendimento e dificuldades no
            acompanhamento dos pacientes.
          </p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 text-center">
          A Solução: CareSyncer
        </h2>

        <p className="text-base sm:text-lg text-gray-700 text-center max-w-3xl mx-auto leading-7 md:leading-8">
          O <strong>CareSyncer</strong> digitaliza e organiza o fluxo de atendimento,
          conectando pacientes e dentistas de forma mais rápida, transparente e eficiente.
        </p>
      </section>
    </div>
  )
}