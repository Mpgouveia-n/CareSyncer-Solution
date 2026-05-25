import { del, get, post, put } from "./api"
import type { Triagem, TriagemPayload } from "../types/Triagem"

export function listarTriagens() {
  return get<Triagem[]>("/triagens")
}

export function cadastrarTriagem(triagem: TriagemPayload) {
  return post<Triagem>("/triagens", triagem)
}

export function atualizarTriagem(id: number | string, triagem: TriagemPayload) {
  return put<Triagem>(`/triagens/${id}`, triagem)
}

export function deletarTriagem(id: number | string) {
  return del<void>(`/triagens/${id}`)
}
