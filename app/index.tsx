import { AuthContext } from 'context/useAuthContext';
import { Redirect } from 'expo-router'
import { useContext, useEffect } from 'react';

export default function Page() {

  const { user, getCurrentUser } = useContext(AuthContext)

  useEffect(() => {
    getCurrentUser
  }, [])
  
  return !user ? <Redirect href={'/(auth)/login'}/> : <Redirect href={'/favorites/favorites'}/>
}
