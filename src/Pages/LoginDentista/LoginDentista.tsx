import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Hero from "../../Componentes/Hero/Hero"
import useFadeIn from "../../hooks/EfeitosVisuais/useFadeIn"
import heroImg from "../../assets/Imagens/ImagensHeros/hero funcionalidades .png"

type LoginDentistaForm = {
  identificador: string
  senha: string
}

export default function LoginDentista() {
  useFadeIn()

  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDentistaForm>({
    defaultValues: {
      identificador: "",
      senha: ""
    }
  })

  const onSubmit: SubmitHandler<LoginDentistaForm> = () => {
    setMensagem("Login simulado com sucesso. Redirecionando para procedimentos...")

    setTimeout(() => {
      navigate("/procedimentos")
    }, 1200)
  }

  return (
    <div className="fade-in bg-[#d8f0db]">
      <Hero
        titulo="Login Dentista"
        descricao="Acesso visual para dentistas voluntários acompanharem atendimentos e procedimentos."
        imagem={heroImg}
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
        <div className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-2xl md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div>
              <label htmlFor="identificador" className="mb-1 block font-semibold text-gray-700">
                CRO ou e-mail
              </label>
              <input
                id="identificador"
                type="text"
                placeholder="CRO-SP 000000 ou dentista@email.com"
                {...register("identificador", {
                  validate: (value) =>
                    value.trim().length >= 5 || "Informe um CRO ou e-mail válido."
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.identificador && <span className="text-sm text-red-500">{errors.identificador.message}</span>}
            </div>

            <div>
              <label htmlFor="senha" className="mb-1 block font-semibold text-gray-700">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres."
                  }
                })}
                className="w-full min-w-0 rounded-lg border border-gray-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              {errors.senha && <span className="text-sm text-red-500">{errors.senha.message}</span>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#FB8C00] px-8 py-3 font-semibold text-white transition hover:bg-[#E86E00] sm:w-fit"
            >
              Entrar
            </button>

            {mensagem && (
              <div className="rounded-lg bg-green-100 p-3 text-center font-semibold text-green-700">
                {mensagem}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
