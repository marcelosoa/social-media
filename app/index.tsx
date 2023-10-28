import { useAuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { useContext, useEffect } from 'react';

export default function Page() {

  const { user, getCurrentUser } = useContext(useAuthContext)

  useEffect(() => {
    getCurrentUser()
    console.log(user, 'USER')
  }, [])
  
  return !user ? <Redirect href={'/(auth)/login'}/> : <Redirect href={'/(tabs)/favorites/favorites'}/>
}
