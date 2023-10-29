import { AuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from 'firebaseConfig';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

export default function Page() {
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])


  return (
    <View>
      {user ? <Redirect href={'/(auth)/login'}/> : <Redirect href={'/(tabs)/home/home'}/>}
    </View>
  )
}
