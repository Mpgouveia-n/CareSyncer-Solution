export type LocalTriagem = {
  id?: number | string
  idLocalTriagem?: number | string
  nome?: string
  endereco?: string
  telefone?: string
  responsavel?: string
}

export type LocalTriagemPayload = Omit<LocalTriagem, "id" | "idLocalTriagem">
