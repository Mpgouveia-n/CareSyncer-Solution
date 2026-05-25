import { del, get, post, put } from "./api"
import type { Paciente, PacientePayload } from "../types/Paciente"

export function listarPacientes() {
  return get<Paciente[]>("/pacientes")
}

export function cadastrarPaciente(paciente: PacientePayload) {
  return post<Paciente>("/pacientes", paciente)
}

export function atualizarPaciente(id: number | string, paciente: PacientePayload) {
  return put<Paciente>(`/pacientes/${id}`, paciente)
}

export function deletarPaciente(id: number | string) {
  return del<void>(`/pacientes/${id}`)
}
