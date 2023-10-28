import { useAuthContext } from "context/useAuthContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "firebaseConfig";

import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Home () {
  const [user, setUser] = useState<User | null>(null);

  const { getCurrentUser } = useContext(useAuthContext)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user) 
      setUser(user)
    })
  })
  
  return (
    <View>
      <Text> Home </Text>
    </View>
  )
}