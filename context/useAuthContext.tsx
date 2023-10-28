import { useRouter } from 'expo-router'
import { createContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { FIREBASE_AUTH, firebaseConfig } from 'firebaseConfig'
import { formData } from 'types'

export const FIREBASE_APP = initializeApp(firebaseConfig)

type AuthContextProps = {
  signIn: (data: formData) => void
  logout: () => void
  signUp: (data: formData) => void
  resetPassword: (email: string) => void
  getCurrentUser: () => void
  updateUserInfo: (data: ProfileUpdate) => void
  loading: boolean
  user: User | null
}

type AuthProviderProps = {
  children: React.ReactNode
}

type ProfileUpdate = {
  name: string,
  URL: string
}

export const useAuthContext = createContext({} as AuthContextProps)

function AuthContext({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const signIn = async ({ email, password }: formData) => {
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      setUser(userCredential.user)
      router.push('/(tabs)/home/home')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async ({ email, password }: formData) => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      router.push('/(tabs)/home/home')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    try {
      FIREBASE_AUTH.signOut()
    } catch (error) {
      alert(error)
    }
    router.push('/(auth)/login')
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(FIREBASE_AUTH, email)
      alert('Verify your email')
      router.replace('/')
    } catch (error) {
      alert(error)
    }
  }

  const getCurrentUser = () => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }

  const updateUserInfo = async ({name, URL}: ProfileUpdate) => {
    try {
        if (FIREBASE_AUTH.currentUser) {
            await updateProfile(FIREBASE_AUTH.currentUser, {
                displayName: name,
                photoURL: URL
            });
        }
    } catch (error) {
        alert(error);
    }
  }

  return (
    <useAuthContext.Provider
      value={{
        signIn,
        logout,
        signUp,
        loading,
        updateUserInfo,
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
