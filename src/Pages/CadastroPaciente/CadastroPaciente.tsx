import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Hero from "../../Componentes/Hero/Hero"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import { cadastrarPaciente, deletarPaciente, listarPacientes } from "../../services/pacienteService"
import type { Paciente, PacientePayload } from "../../types/Paciente"
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

function getPacienteId(paciente: Paciente) {
  return paciente.id ?? paciente.idPaciente ?? paciente.id_paciente
}

function getPacienteNome(paciente: Paciente) {
  return paciente.nome ?? paciente.nomeCompleto ?? "Paciente sem nome"
}

function gerarIdPaciente() {
  return Math.floor(Date.now() / 1000)
}

export default function CadastroPaciente() {
  useFadeIn()

  const [sucesso, setSucesso] = useState("")
  const [erroApi, setErroApi] = useState("")
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [carregandoPacientes, setCarregandoPacientes] = useState(false)
  const [enviando, setEnviando] = useState(false)

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

  async function carregarPacientes() {
    setCarregandoPacientes(true)
    setErroApi("")

    try {
      const data = await listarPacientes()
      setPacientes(Array.isArray(data) ? data : [])
    } catch (error) {
      setPacientes([])
      setErroApi(error instanceof Error ? error.message : "Erro ao listar pacientes.")
    } finally {
      setCarregandoPacientes(false)
    }
  }

  useEffect(() => {
    carregarPacientes()
  }, [])

  const onSubmit: SubmitHandler<CadastroPacienteForm> = async (data) => {
    setEnviando(true)
    setErroApi("")
    setSucesso("")

    const paciente: PacientePayload = {
      id_paciente: gerarIdPaciente(),
      nome: data.nome.trim(),
      cpf: data.cpf.trim(),
      data_nascimento: `${data.nascimento}T00:00:00.000-03:00`,
      telefone: data.telefone.trim(),
      email: data.email.trim()
    }

    try {
      console.log("Payload POST /pacientes:", paciente)
      await cadastrarPaciente(paciente)
      setSucesso(`Cadastro de ${data.nome.trim()} enviado para a API com sucesso.`)
      reset()
      await carregarPacientes()

      setTimeout(() => {
        setSucesso("")
      }, 4000)
    } catch (error) {
      setErroApi(error instanceof Error ? error.message : "Erro ao cadastrar paciente.")
    } finally {
      setEnviando(false)
    }
  }

  async function handleExcluirPaciente(paciente: Paciente) {
    const id = getPacienteId(paciente)

    if (!id) {
      setErroApi("A API não retornou um identificador para este paciente.")
      return
    }

    setErroApi("")

    try {
      await deletarPaciente(id)
      await carregarPacientes()
    } catch (error) {
      setErroApi(error instanceof Error ? error.message : "Erro ao excluir paciente.")
    }
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
                disabled={enviando}
                className="w-full rounded-full bg-[#FB8C00] px-8 py-3 font-semibold text-white transition hover:bg-[#E86E00] disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
              >
                {enviando ? "Enviando..." : "Cadastrar paciente"}
              </button>
            </div>

            {sucesso && (
              <div className="rounded-lg bg-green-100 p-3 text-center font-semibold text-green-700 md:col-span-2">
                {sucesso}
              </div>
            )}

            {erroApi && (
              <div className="rounded-lg bg-red-100 p-3 text-center font-semibold text-red-700 md:col-span-2">
                {erroApi}
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-[#2E7D32]">
            Pacientes cadastrados
          </h2>

          {carregandoPacientes && (
            <p className="text-gray-700">Carregando pacientes...</p>
          )}

          {!carregandoPacientes && pacientes.length === 0 && (
            <p className="text-gray-700">Nenhum paciente cadastrado ainda.</p>
          )}

          {!carregandoPacientes && pacientes.length > 0 && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {pacientes.map((paciente, index) => {
                const id = getPacienteId(paciente)

                return (
                  <article key={id ?? index} className="rounded-xl border border-gray-300 p-4">
                    <h3 className="font-bold text-gray-900">
                      {getPacienteNome(paciente)}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {paciente.email ?? "E-mail não informado"}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {paciente.telefone ?? "Telefone não informado"}
                    </p>

                    {id && (
                      <button
                        type="button"
                        onClick={() => handleExcluirPaciente(paciente)}
                        className="mt-4 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                      >
                        Excluir
                      </button>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
