import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { defaultApp } from 'firebaseConfig';
import {  useEffect, useState } from 'react';
import Login from './(auth)/login';
import Home from './(tabs)/home/home';
defaultApp

export default function Page() {
  const [user, setUser] = useState<User | null>(null)

  const auth = getAuth(defaultApp)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user, 'USER')
      setUser(user)
    })
  }, [])


  return !user ? <Login /> : <Home />
}
