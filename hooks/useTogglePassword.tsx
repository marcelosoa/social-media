import { useState } from "react"

export function useTogglePassword () {
  
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const togglePassword = () => {
    setIsVisible(!isVisible)
  }

  const visibility = isVisible ? true : false

  return { togglePassword, visibility }
}