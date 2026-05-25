import { del, get, post, put } from "./api"
import type { LocalTriagem, LocalTriagemPayload } from "../types/LocalTriagem"

export function listarLocaisTriagem() {
  return get<LocalTriagem[]>("/locais-triagem")
}

export function cadastrarLocalTriagem(localTriagem: LocalTriagemPayload) {
  return post<LocalTriagem>("/locais-triagem", localTriagem)
}

export function atualizarLocalTriagem(id: number | string, localTriagem: LocalTriagemPayload) {
  return put<LocalTriagem>(`/locais-triagem/${id}`, localTriagem)
}

export function deletarLocalTriagem(id: number | string) {
  return del<void>(`/locais-triagem/${id}`)
}
