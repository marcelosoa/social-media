import { AuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

export default function Page() {
  const [user, setUser] = useState<User | null>(null)

  const auth = getAuth()
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user, 'USER')
      setUser(user)
    })
  }, [])


  return (
    <View>
      {user ? (
        <Redirect href={'/(tabs)/home/home'}/>
      ): <Redirect href={'/(auth)/login'}/>}
    </View>
  )
}
