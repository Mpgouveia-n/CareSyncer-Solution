import { del, get, post, put } from "./api"
import type { Atendimento, AtendimentoPayload } from "../types/Atendimento"

export function listarAtendimentos() {
  return get<Atendimento[]>("/atendimentos")
}

export function cadastrarAtendimento(atendimento: AtendimentoPayload) {
  return post<Atendimento>("/atendimentos", atendimento)
}

export function atualizarAtendimento(id: number | string, atendimento: AtendimentoPayload) {
  return put<Atendimento>(`/atendimentos/${id}`, atendimento)
}

export function deletarAtendimento(id: number | string) {
  return del<void>(`/atendimentos/${id}`)
}
