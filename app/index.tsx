import { useAuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { useContext, useEffect } from 'react';
import { View } from 'react-native';

export default function Page() {

  const { user, getCurrentUser } = useContext(useAuthContext)

  useEffect(() => {
    getCurrentUser
  }, [])
  
  return (
    <View>
      { user ? <Redirect href={'/(tabs)/home/home'}/> : <Redirect href={'/(auth)/login'}/>}
    </View>
  )
}
