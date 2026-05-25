export type Atendimento = {
  id?: number | string
  idAtendimento?: number | string
  pacienteId?: number | string
  dentistaId?: number | string
  procedimentoId?: number | string
  data?: string
  status?: string
  observacoes?: string
}

export type AtendimentoPayload = Omit<Atendimento, "id" | "idAtendimento">
