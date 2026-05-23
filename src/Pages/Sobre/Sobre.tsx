import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import Hero from "../../Componentes/Hero/Hero"
import heroImg from "../../assets/Imagens/ImagensHeros/parceira.jpg"

export default function Sobre() {
  useFadeIn()

  return (
    <div className="fade-in bg-[#d8f0db] lg:bg-white">
      <Hero
        titulo="Sobre o Projeto"
        descricao="Conheça o CareSyncer e a Turma do Bem"
        imagem={heroImg}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 xl:px-16">
        <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-10 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
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
    </div>
  )
}
