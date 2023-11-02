import { AntDesign } from '@expo/vector-icons'
import { AvatarComponent } from 'components/avatar'
import { ButtonComponent } from 'components/button'
import { AuthContext } from 'context/useAuthContext'
import { router } from 'expo-router'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function Profile() {
  const { logout } = useContext(AuthContext)
  const auth = getAuth()

  const [user, setUser] = useState<User | null>(null)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  return (
    <View className="bg-background flex-1">
      <View className="flex items-center justify-between w-full pl-7 pr-7 pt-16 flex-row">
        <AntDesign name="logout" size={24} color={'#fff'} onPress={logout}/>
        <Text onPress={() => router.push('/home/home')} className='text-white'>
          Voltar a Home
        </Text>
      </View>

      <View className="items-center">
        <AvatarComponent
          size="large"
          source={{
            uri: user?.photoURL,
          }}
        />
        <Text className="text-white mt-4 font-bold">{user?.displayName}</Text>
      </View>

      <View className="mt-4 ml-4 items-center">
        <ButtonComponent onPress={() => router.push('/edit')}>
          <Text className="text-white font-bold">Editar Perfil</Text>
        </ButtonComponent>
      </View>
    </View>
  )
}
