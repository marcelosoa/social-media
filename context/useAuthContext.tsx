import { useRouter } from 'expo-router'
import { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth'

import { formData } from 'types'

type AuthContextProps = {
  signIn: (data: formData) => void
  logout: () => void
  signUp: (data: formData) => void
  // resetPassword: (email: string) => void
  updateUserInfo: (data: ProfileUpdate) => void
  loading: boolean
  user: User | null
  error: string
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
  const [error, setError] = useState<string>('')

  const router = useRouter()
  const auth = getAuth()

  const signIn = async ({ email, password }: formData) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setUser(user)
      router.push('/home/home')
    } catch (error) {
      setError(error?.message)
    } finally {
      setLoading(false)
    }
  }


  const signUp = async ({ email, password }: formData) => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setUser(user)
      router.push('/home/home')
      alert('check your email')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    try {
      auth.signOut()
    } catch (error) {
      alert(error)
    }
    router.replace('/login/login')
  }

  const updateUserInfo = async ({name, photoURL}: ProfileUpdate) => {
    setLoading(true)
    try {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL
            });
        }
        alert('User Profile Updated')
        router.push('/(tabs)/profile/profile')
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
        user,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
