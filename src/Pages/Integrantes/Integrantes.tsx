import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import Hero from "../../Componentes/Hero/Hero"
import IntegrantesCard from "../../Componentes/IntegrantesCard/IntegrantesCard"

import heroImg from "../../assets/Imagens/ImagensHeros/hero funcionalidades .png"
import img1 from "../../assets/Imagens/IntegrantesCareSyncer/Manuel pedro. contato.jpg"
import img2 from "../../assets/Imagens/IntegrantesCareSyncer/Lucas shida.contato.jpg"

export default function Integrantes() {
  useFadeIn()

  const integrantes = [
    {
      nome: "Manuel Pedro de Gouveia Neto",
      cargo: "Desenvolvedor Full Stack (Front-end, Back-end e Banco de Dados)",
      rm: "RM: 567458 — Turma: 1ºTDSPS",
      linkedin: "https://www.linkedin.com/in/manuel-pedro-gouveia-neto-89928638a/",
      github: "https://github.com/Mpescorpion",
      imagem: img1
    },
    {
      nome: "Lucas Shida Rodrigues da Costa",
      cargo: "ChatDeveloper / Engenharia de Documentação",
      rm: "RM: 568194 — Turma: 1ºTDSPS",
      linkedin: "http://www.linkedin.com/in/lucas-shida",
      github: "https://github.com/LucasShida",
      imagem: img2
    }
  ]

  return (
    <div className="fade-in">
      <Hero
        titulo="Nossa Equipe"
        descricao="Conheça os integrantes responsáveis pelo desenvolvimento do CareSyncer."
        imagem={heroImg}
      />

      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {integrantes.map((integrante, index) => (
            <IntegrantesCard
              key={index}
              nome={integrante.nome}
              cargo={integrante.cargo}
              imagem={integrante.imagem}
              rm={integrante.rm}
              linkedin={integrante.linkedin}
              github={integrante.github}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
