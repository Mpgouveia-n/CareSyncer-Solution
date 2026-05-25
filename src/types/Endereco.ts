export type Endereco = {
  id?: number | string
  idEndereco?: number | string
  logradouro?: string
  numero?: string
  bairro?: string
  cidade?: string
  estado?: string
  cep?: string
  complemento?: string
}

export type EnderecoPayload = Omit<Endereco, "id" | "idEndereco">
