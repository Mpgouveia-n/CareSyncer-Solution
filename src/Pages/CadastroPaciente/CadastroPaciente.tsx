import { useState } from "react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Hero from "../../Componentes/Hero/Hero"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import heroImg from "../../assets/Imagens/ImagensHeros/parceira.jpg"

type CadastroPacienteForm = {
  nome: string
  cpf: string
  nascimento: string
  telefone: string
  email: string
  endereco: string
  necessidade: string
}

export default function CadastroPaciente() {
  useFadeIn()

  const [sucesso, setSucesso] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CadastroPacienteForm>({
    defaultValues: {
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      email: "",
      endereco: "",
      necessidade: ""
    }
  })

  const onSubmit: SubmitHandler<CadastroPacienteForm> = (data) => {
    setSucesso(`Cadastro de ${data.nome.trim()} preparado com sucesso.`)
    reset()

    setTimeout(() => {
      setSucesso("")
    }, 4000)
  }

  return (
    <div className="fade-in bg-[#d8f0db]">
      <Hero
        titulo="Cadastro de Paciente"
        descricao="Registre as informações iniciais para organizar a triagem odontológica social."
        imagem={heroImg}
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
        <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor="nome" className="mb-1 block font-semibold text-gray-700">
                Nome completo
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Nome do paciente"
                {...register("nome", {
                  validate: (value) =>
                    value.trim().length >= 3 || "Informe o nome completo."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.nome && <span className="text-sm text-red-500">{errors.nome.message}</span>}
            </div>

            <div>
              <label htmlFor="cpf" className="mb-1 block font-semibold text-gray-700">
                CPF
              </label>
              <input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                {...register("cpf", {
                  validate: (value) =>
                    value.replace(/\D/g, "").length === 11 || "Informe um CPF com 11 dígitos."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.cpf && <span className="text-sm text-red-500">{errors.cpf.message}</span>}
            </div>

            <div>
              <label htmlFor="nascimento" className="mb-1 block font-semibold text-gray-700">
                Data de nascimento
              </label>
              <input
                id="nascimento"
                type="date"
                {...register("nascimento", {
                  required: "Informe a data de nascimento."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.nascimento && <span className="text-sm text-red-500">{errors.nascimento.message}</span>}
            </div>

            <div>
              <label htmlFor="telefone" className="mb-1 block font-semibold text-gray-700">
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                {...register("telefone", {
                  validate: (value) =>
                    value.replace(/\D/g, "").length >= 10 || "Informe um telefone válido."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.telefone && <span className="text-sm text-red-500">{errors.telefone.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-semibold text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="paciente@email.com"
                {...register("email", {
                  validate: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ||
                    "Informe um e-mail válido."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="endereco" className="mb-1 block font-semibold text-gray-700">
                Endereço
              </label>
              <input
                id="endereco"
                type="text"
                placeholder="Rua, número, bairro e cidade"
                {...register("endereco", {
                  validate: (value) =>
                    value.trim().length >= 5 || "Informe um endereço válido."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.endereco && <span className="text-sm text-red-500">{errors.endereco.message}</span>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="necessidade" className="mb-1 block font-semibold text-gray-700">
                Necessidade odontológica
              </label>
              <textarea
                id="necessidade"
                rows={5}
                placeholder="Descreva dor, urgência, tratamento necessário ou observações da triagem."
                {...register("necessidade", {
                  validate: (value) =>
                    value.trim().length >= 10 || "Descreva a necessidade com pelo menos 10 caracteres."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.necessidade && <span className="text-sm text-red-500">{errors.necessidade.message}</span>}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-[#FB8C00] px-8 py-3 font-semibold text-white transition hover:bg-[#E86E00] sm:w-fit"
              >
                Cadastrar paciente
              </button>
            </div>

            {sucesso && (
              <div className="rounded-lg bg-green-100 p-3 text-center font-semibold text-green-700 md:col-span-2">
                {sucesso}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
