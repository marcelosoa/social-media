import { AntDesign } from '@expo/vector-icons'
import { ButtonComponent } from 'components/button'
import { useAuthContext } from 'context/useAuthContext'
import { router } from 'expo-router'
import { useContext, useState } from 'react'
import { Text, View } from 'react-native'

export default function Profile() {
  const { logout, user, updateUserInfo } = useContext(useAuthContext)

  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "")

  console.log()

  return (
    <View className="bg-background flex-1">
      <View className="flex items-center justify-between w-full pl-7 pr-7 pt-16 flex-row">
        <Text className="text-white">{user?.email}</Text>
        <AntDesign name="logout" size={24} color={'#fff'} onPress={logout} />
      </View>

      <View className='mt-4 ml-4 items-center'>
        <Text className='text-white'>Update user infos</Text>
        <ButtonComponent onPress={() => router.push('/edit')}>
          <Text className='text-white'>Editar Perfil</Text>
        </ButtonComponent>
      </View>
    </View>
  )
}
