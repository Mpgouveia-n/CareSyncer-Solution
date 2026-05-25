import { get } from "./api"

export function verificarHealth() {
  return get<string>("/health")
}
