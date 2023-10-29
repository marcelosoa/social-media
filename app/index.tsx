import { AuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_INITIALIZE_AUTH } from 'firebaseConfig';
import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

export default function Page() {
  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    onAuthStateChanged(FIREBASE_INITIALIZE_AUTH, (user) => {
      setUser(user)
    })
  }, [user])


  return (
    <View>
      {user ? (
        <Redirect href={'/(tabs)/home/home'}/>
      ): <Redirect href={'/(auth)/login'}/>}
    </View>
  )
}
