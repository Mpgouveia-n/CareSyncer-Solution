export type Dentista = {
  id?: number | string
  idDentista?: number | string
  nome?: string
  cro?: string
  email?: string
  telefone?: string
  especialidade?: string
}

export type DentistaPayload = Omit<Dentista, "id" | "idDentista">
