import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { defaultApp } from 'firebaseConfig';
import { useContext, useEffect, useState } from 'react';
import Login from './(stacks)/(auth)/login/login';
import Home from './(tabs)/home/home';
import { AuthContext } from 'context/useAuthContext';
import { ActivityIndicator } from 'react-native';
defaultApp

export default function Page() {
  const [user, setUser] = useState<User | null>(null)
  const { loading } = useContext(AuthContext)
  const auth = getAuth(defaultApp)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])


  return loading ? (
    <ActivityIndicator color='#fff' size={'small'}/>
  ) : !user ? (
    <Login />
  ) : <Home />
}
