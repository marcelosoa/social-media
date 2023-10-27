import { useRouter } from "expo-router";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebaseConfig";

export const FIREBASE_APP = initializeApp(firebaseConfig)

type loginFormData = {
  email: string,
  password: string
  id?: string
}

type AuthContextProps = {
  signIn: (data: loginFormData) => void
  signOut: () => void
  signUp: (data: loginFormData) => void
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

  const auth = getAuth()

  const signUp = async ({email, password}: loginFormData) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const user = response.user
      alert('check your email')
      console.log(user, 'USER')
      console.log(response, 'RESPOSE DATA')
    } catch (error) {
      console.log(error)
    }
  }

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   const user = userCredential.user
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // })

  return (
    <useAuthContext.Provider value={{
      signIn,
      signOut,
      signUp,
      name: 'Marcelo'
    }}>
      {children}
    </useAuthContext.Provider>
  )
  
}
export default AuthContext