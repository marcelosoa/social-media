import { Redirect, useRouter } from 'expo-router'
import { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth'

import { FIREBASE_INITIALIZE_AUTH } from 'firebaseConfig'
import { formData } from 'types'

type AuthContextProps = {
  signIn: (data: formData) => void
  logout: () => void
  signUp: (data: formData) => void
  // resetPassword: (email: string) => void
  updateUserInfo: (data: ProfileUpdate) => void
  loading: boolean
  user: User | null
  
}

type AuthProviderProps = {
  children: React.ReactNode
}

type ProfileUpdate = {
  name: string,
  photoURL: string
}

export const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const signIn = async ({ email, password }: formData) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(FIREBASE_INITIALIZE_AUTH, email, password)
      setUser(user)
      alert('check your email')
      router.push('/home/home')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async ({ email, password }: formData) => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(FIREBASE_INITIALIZE_AUTH, email, password)
      alert('check your email')
      setUser(user)
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    try {
      FIREBASE_INITIALIZE_AUTH.signOut()
    } catch (error) {
      alert(error)
    }
    router.replace('/(auth)/login')
  }

  // const resetPassword = async (email: string) => {
  //   try {
  //     await sendPasswordResetEmail(FIREBASE_INITIALIZE_AUTH, email)
  //     alert('Verify your email')
  //     router.replace('/')
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  const updateUserInfo = async ({name, photoURL}: ProfileUpdate) => {
    setLoading(true)
    try {
        if (FIREBASE_INITIALIZE_AUTH.currentUser) {
            await updateProfile(FIREBASE_INITIALIZE_AUTH.currentUser, {
                displayName: name,
                photoURL: photoURL
            });
        }
        alert('User Profile Updated')
        router.push('/(profile)/profile')
    } catch (error) {
        alert(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        logout,
        signUp,
        loading,
        updateUserInfo,
        // resetPassword,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
