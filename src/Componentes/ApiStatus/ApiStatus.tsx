import { useEffect, useState } from "react"
import { verificarHealth } from "../../services/healthService"

type ApiState = "checking" | "online" | "offline"

export default function ApiStatus() {
  const [status, setStatus] = useState<ApiState>("checking")

  useEffect(() => {
    async function checkApi() {
      try {
        await verificarHealth()
        setStatus("online")
      } catch {
        setStatus("offline")
      }
    }

    checkApi()
  }, [])

  const isOnline = status === "online"
  const statusText =
    status === "checking" ? "Verificando API..." : isOnline ? "API conectada" : "API offline"

  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
      <span
        className={`h-2 w-2 rounded-full ${
          isOnline ? "bg-green-500" : status === "checking" ? "bg-yellow-400" : "bg-red-500"
        }`}
      />
      <span>{statusText}</span>
    </div>
  )
}
