export type Procedimento = {
  id?: number | string
  idProcedimento?: number | string
  nome?: string
  descricao?: string
  resumo?: string
  categoria?: string
  destaque?: string
}

export type ProcedimentoPayload = Omit<Procedimento, "id" | "idProcedimento">
