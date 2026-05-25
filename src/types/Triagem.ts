export type Triagem = {
  id?: number | string
  idTriagem?: number | string
  pacienteId?: number | string
  localTriagemId?: number | string
  data?: string
  prioridade?: string
  observacoes?: string
}

export type TriagemPayload = Omit<Triagem, "id" | "idTriagem">
