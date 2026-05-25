export const API_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080"

type RequestOptions = {
  method?: string
  body?: unknown
}

async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type")

  if (response.status === 204) {
    return undefined as T
  }

  if (contentType?.includes("application/json")) {
    return response.json() as Promise<T>
  }

  return response.text() as Promise<T>
}

export async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const headers = new Headers()

  if (options.body !== undefined) {
    headers.set("Content-Type", "application/json")
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: options.method ?? "GET",
      headers,
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined
    })

    if (!response.ok) {
      const errorBody = await parseResponse<string | { message?: string; error?: string }>(response)
      const message =
        typeof errorBody === "string"
          ? errorBody
          : errorBody.message ?? errorBody.error ?? "Erro ao comunicar com a API."

      throw new Error(`Erro ${response.status}: ${message}`)
    }

    return parseResponse<T>(response)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error("Não foi possível conectar à API.")
  }
}

export function get<T>(endpoint: string) {
  return request<T>(endpoint)
}

export function post<T>(endpoint: string, body: unknown) {
  return request<T>(endpoint, { method: "POST", body })
}

export function put<T>(endpoint: string, body: unknown) {
  return request<T>(endpoint, { method: "PUT", body })
}

export function del<T>(endpoint: string) {
  return request<T>(endpoint, { method: "DELETE" })
}
