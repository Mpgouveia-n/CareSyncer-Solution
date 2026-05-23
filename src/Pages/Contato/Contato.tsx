import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import Hero from "../../Componentes/Hero/Hero"

import heroImg from "../../assets/Imagens/ImagensHeros/parceira.jpg"
import img1 from "../../assets/Imagens/IntegrantesCareSyncer/Manuel pedro. contato.jpg"
import img2 from "../../assets/Imagens/IntegrantesCareSyncer/Lucas shida.contato.jpg"

type FormData = {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export default function Contato() {
  useFadeIn()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    }
  })

  const [sucesso, setSucesso] = useState("")
  const [nomeSalvo, setNomeSalvo] = useState("")

  useEffect(() => {
    const nome = localStorage.getItem("nomeUsuario")
    if (nome) setNomeSalvo(nome)
  }, [])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const nome = data.nome.trim()

    localStorage.setItem("nomeUsuario", nome)
    setNomeSalvo(nome)
    setSucesso(`Mensagem enviada com sucesso! Obrigado, ${nome}!`)
    reset()

    setTimeout(() => {
      setSucesso("")
    }, 4000)
  }

  return (
    <div className="fade-in">
      <Hero
        titulo="Fale Conosco"
        descricao="Entre em contato com nossa equipe ou envie uma mensagem sobre o projeto CareSyncer x Turma do Bem."
        imagem={heroImg}
      />

      <section className="bg-orange-500 py-16 px-4 flex justify-center">
        <div className="bg-white p-8 rounded-2xl w-full max-w-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            Envie uma mensagem
          </h2>

          {nomeSalvo && (
            <p className="text-green-700 text-center font-semibold mb-4">
              Bem-vindo de volta, {nomeSalvo}! Fique à vontade para enviar uma nova mensagem.
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <label htmlFor="nome" className="block font-semibold text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome"
                {...register("nome", {
                  validate: (value) =>
                    value.trim().length >= 3 || "Digite seu nome completo."
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Seu e-mail"
                {...register("email", {
                  validate: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ||
                    "Digite um e-mail válido."
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="assunto" className="block font-semibold text-gray-700 mb-1">
                Assunto
              </label>
              <input
                id="assunto"
                type="text"
                placeholder="Ex: Parceria, dúvida, sugestão..."
                {...register("assunto", {
                  validate: (value) =>
                    value.trim().length >= 3 || "O assunto deve ter pelo menos 3 caracteres."
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              {errors.assunto && <span className="text-red-500 text-sm">{errors.assunto.message}</span>}
            </div>

            <div>
              <label htmlFor="mensagem" className="block font-semibold text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={5}
                placeholder="Escreva sua mensagem aqui..."
                {...register("mensagem", {
                  validate: (value) =>
                    value.trim().length >= 10 || "A mensagem deve ter pelo menos 10 caracteres."
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
              {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem.message}</span>}
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Enviar
            </button>

            {sucesso && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center mt-2">
                {sucesso}
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700">
          Equipe do Projeto
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-4 w-72 hover:-translate-y-2 transition">
            <img
              src={img1}
              alt="Manuel Pedro de Gouveia Neto"
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-lg">
              Manuel Pedro de Gouveia Neto
            </h3>
            <p className="text-sm text-gray-600">
              Desenvolvedor Full Stack
            </p>
            <a
              href="mailto:manuelpedrogouveia07@gmail.com"
              className="text-green-700 text-sm hover:underline"
            >
              manuelpedrogouveia07@gmail.com
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-4 w-72 hover:-translate-y-2 transition">
            <img
              src={img2}
              alt="Lucas Shida Rodrigues da Costa"
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-bold text-lg">
              Lucas Shida Rodrigues da Costa
            </h3>
            <p className="text-sm text-gray-600">
              ChatDeveloper / Engenharia de Documentação
            </p>
            <a
              href="mailto:lucasshida10@gmail.com"
              className="text-green-700 text-sm hover:underline"
            >
              lucasshida10@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
