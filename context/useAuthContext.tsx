import { useRouter } from "expo-router";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebaseConfig";

export const FIREBASE_APP = initializeApp(firebaseConfig)

type formData = {
  email: string,
  password: string
}

type AuthContextProps = {
  signIn: (data: formData) => void
  logout: () => void
  signUp: (data: formData) => void
  resetPassword: (email: string) => void
  name: string,
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const useAuthContext = createContext({} as AuthContextProps)

function AuthContext ({children}: AuthProviderProps) {
  const [user, setUser] = useState<formData | null>();
  const router = useRouter()
  const auth = getAuth()

  const signIn = async ({ email, password}: formData) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email !== '' && password !== '') {
        setUser({
          email,
          password,
        })
        router.push('/(tabs)/home/home')
      }
    } catch (error) {
      alert((error as Error).message || 'Ocorreu um erro ao tentar fazer login');
    }
  }
  const signUp = async ({email, password}: formData) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      alert('check your email')
      router.push('/(tabs)/home/home')
    } catch (error) {
      alert(error)
    }
  }
  const logout = () => {
    signOut(auth)
    router.replace('/')
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      alert(error)
    }
  }


  return (
    <useAuthContext.Provider value={{
      signIn,
      logout,
      signUp,
      resetPassword,
      name: 'Marcelo'
    }}>
      {children}
    </useAuthContext.Provider>
  )
  
}
export default AuthContext