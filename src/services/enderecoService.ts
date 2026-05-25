import { del, get, post, put } from "./api"
import type { Endereco, EnderecoPayload } from "../types/Endereco"

export function listarEnderecos() {
  return get<Endereco[]>("/enderecos")
}

export function cadastrarEndereco(endereco: EnderecoPayload) {
  return post<Endereco>("/enderecos", endereco)
}

export function atualizarEndereco(id: number | string, endereco: EnderecoPayload) {
  return put<Endereco>(`/enderecos/${id}`, endereco)
}

export function deletarEndereco(id: number | string) {
  return del<void>(`/enderecos/${id}`)
}
