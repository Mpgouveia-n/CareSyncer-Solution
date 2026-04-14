import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import Hero from "../../Componentes/Hero/Hero"
import heroImg from "../../assets/images/hero-sobre.png"

export default function Sobre() {
  useFadeIn()

  return (
    <div className="fade-in">
      <Hero
        titulo="Sobre o Projeto"
        descricao="Conheça o CareSyncer e a Turma do Bem"
        imagem={heroImg}
      />

      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
        <section className="mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            Sobre a Turma do Bem
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-7 md:leading-8">
            A Turma do Bem é uma organização sem fins lucrativos que conecta
            dentistas voluntários a pessoas em situação de vulnerabilidade social,
            oferecendo tratamento odontológico gratuito.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-7 md:leading-8">
            O projeto atua há anos transformando vidas através do acesso à saúde
            bucal, promovendo inclusão social e melhor qualidade de vida.
          </p>
        </section>

        <section className="mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            Sobre o CareSyncer
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-7 md:leading-8">
            O CareSyncer é uma solução tecnológica desenvolvida para melhorar
            a comunicação e o gerenciamento de pacientes e dentistas voluntários.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-7 md:leading-8">
            A plataforma busca digitalizar processos, reduzir o tempo de espera
            e organizar as informações de forma eficiente.
          </p>
        </section>

        <section className="mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            Missão
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-7 md:leading-8">
            Utilizar a tecnologia para conectar pessoas e melhorar o acesso
            à saúde, tornando o atendimento mais rápido, organizado e acessível.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            Visão
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-7 md:leading-8">
            Ser uma plataforma referência no gerenciamento de atendimentos
            sociais na área da saúde.
          </p>
        </section>
      </div>
    </div>
  )
}