import { AvatarComponent } from 'components/avatar'
import { Pressable, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'context/useAuthContext'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'

export default function Home() {
  const { logout } = useContext(AuthContext)
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth()


  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  const router = useRouter()

  return (
    <View className="bg-background flex-1">
      <View className="flex items-center justify-between w-full pl-7 pr-7 pt-16 flex-row">
        <View>
          <Pressable onPress={() => router.push('/(profile)/profile')}>
          <AvatarComponent
            size="normal"
            source={{
              uri: user?.photoURL,
            }}
          />
          </Pressable>
        </View>
        <Text className='text-white'>{user?.displayName}</Text>
      </View>
      
      <Pressable onPress={logout} className='items-center justify-center'>
        <Text className='text-white'>Desconectar</Text>
      </Pressable>
    </View>
  )
}
