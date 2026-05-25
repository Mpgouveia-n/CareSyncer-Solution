import { del, get, post, put } from "./api"
import type { Dentista, DentistaPayload } from "../types/Dentista"

export function listarDentistas() {
  return get<Dentista[]>("/dentistas")
}

export function cadastrarDentista(dentista: DentistaPayload) {
  return post<Dentista>("/dentistas", dentista)
}

export function atualizarDentista(id: number | string, dentista: DentistaPayload) {
  return put<Dentista>(`/dentistas/${id}`, dentista)
}

export function deletarDentista(id: number | string) {
  return del<void>(`/dentistas/${id}`)
}
