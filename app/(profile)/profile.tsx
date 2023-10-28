import { AntDesign } from '@expo/vector-icons'
import { useAuthContext } from 'context/useAuthContext'
import { useContext } from 'react'
import { Text, View } from 'react-native'

export default function Profile() {
  const { logout, user } = useContext(useAuthContext)
  return (
    <View className="bg-background flex-1">
      <View className="flex items-center justify-between w-full pl-7 pr-7 pt-16 flex-row">
        <Text className="text-white">{user?.email}</Text>
        <AntDesign name="logout" size={24} color={'#fff'} onPress={logout} />
      </View>
    </View>
  )
}
