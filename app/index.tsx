import { useAuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { useContext, useEffect } from 'react';

export default function Page() {

  const { user, getCurrentUser } = useContext(useAuthContext)

  useEffect(() => {
    getCurrentUser
  }, [])
  
  return !user ? <Redirect href={'/(tabs)/favorites/favorites'}/> : <Redirect href={'/(auth)/login'}/>
}
