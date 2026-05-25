export type Paciente = {
  id?: number | string
  idPaciente?: number | string
  id_paciente?: number | string
  nome?: string
  nomeCompleto?: string
  cpf?: string
  data_nascimento?: string
  dataNascimento?: string
  nascimento?: string
  telefone?: string
  email?: string
  endereco?: string
  necessidadeOdontologica?: string
  necessidade?: string
}

export type PacientePayload = Omit<Paciente, "id" | "idPaciente">
