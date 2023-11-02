import { useRouter } from 'expo-router'
import { createContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  
} from 'firebase/auth'

import { formData } from 'types'
import { FIREBASE_AUTH } from 'firebaseConfig'

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
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
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
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
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
      FIREBASE_AUTH.signOut()
    } catch (error) {
      alert(error)
    }
    router.replace('/(auth)/login')
  }

  const updateUserInfo = async ({name, photoURL}: ProfileUpdate) => {
    setLoading(true)
    try {
        if (FIREBASE_AUTH.currentUser) {
            await updateProfile(FIREBASE_AUTH.currentUser, {
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
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
