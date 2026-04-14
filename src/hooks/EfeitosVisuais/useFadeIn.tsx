import { useEffect } from "react";

export default function useFadeIn (){

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")

    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-5")

      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-5")
        el.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700")
      }, 100)
    })
  }, [])
}