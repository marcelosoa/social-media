import { useRouter } from 'expo-router'
import { createContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from 'firebaseConfig'
import { formData } from 'types'

export const FIREBASE_APP = initializeApp(firebaseConfig)

type AuthContextProps = {
  signIn: (data: formData) => void
  logout: () => void
  signUp: (data: formData) => void
  resetPassword: (email: string) => void
  getCurrentUser: () => void
  loading: boolean
  user: User | null
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const useAuthContext = createContext({} as AuthContextProps)

function AuthContext({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const auth = getAuth()

  const signIn = async ({ email, password }: formData) => {
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setUser(userCredential.user)
      router.push('/(tabs)/home/home')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async ({ email, password }: formData) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/(tabs)/home/home')
    } catch (error) {
      alert(error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      alert(error)
    }
    router.replace('/')
  }

  const resetPassword = async (email: string) => {
    console.log('executou')
    try {
      await sendPasswordResetEmail(auth, email)
      alert('Verify your email')
      router.replace('/')
    } catch (error) {
      alert(error)
    }
  }

  const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user, 'USER DETAILS')
      setUser(user)
    })
  }

  return (
    <useAuthContext.Provider
      value={{
        signIn,
        logout,
        signUp,
        loading,
        resetPassword,
        getCurrentUser,
        user,
      }}
    >
      {children}
    </useAuthContext.Provider>
  )
}
export default AuthContext
