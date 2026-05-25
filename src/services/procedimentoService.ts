import { del, get, post, put } from "./api"
import type { Procedimento, ProcedimentoPayload } from "../types/Procedimento"

export function listarProcedimentos() {
  return get<Procedimento[]>("/procedimentos")
}

export function cadastrarProcedimento(procedimento: ProcedimentoPayload) {
  return post<Procedimento>("/procedimentos", procedimento)
}

export function atualizarProcedimento(id: number | string, procedimento: ProcedimentoPayload) {
  return put<Procedimento>(`/procedimentos/${id}`, procedimento)
}

export function deletarProcedimento(id: number | string) {
  return del<void>(`/procedimentos/${id}`)
}
