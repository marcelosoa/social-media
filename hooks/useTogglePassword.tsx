import { useState } from "react"

export function useTogglePassword () {
  
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const togglePassword = () => {
    setIsVisible(!isVisible)
  }

  const visibility = isVisible ? true : false

  return { togglePassword, visibility }
}