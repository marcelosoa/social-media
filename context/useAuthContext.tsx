import { useRouter } from "expo-router";
import { createContext, useState } from "react";

type loginFormData = {
  email: string,
  password: string
  id?: string
}

type AuthContextProps = {
  signIn: (data: loginFormData) => void
  signOut: () => void
  name: string,
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const useAuthContext = createContext({} as AuthContextProps)

function AuthContext ({children}: AuthProviderProps) {
  const [user, setUser] = useState<loginFormData>();
  const router = useRouter()

  const signIn = ({ email, password}: loginFormData) => {
    try {
      if (email !== '' && password !== '') {
        setUser({
          email,
          password,
          id: '1'
        })
        router.push('/(tabs)/home/home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = () => {
    router.back()
  }

  return (
    <useAuthContext.Provider value={{
      signIn,
      signOut,
      name: 'Marcelo'
    }}>
      {children}
    </useAuthContext.Provider>
  )
  
}
export default AuthContext