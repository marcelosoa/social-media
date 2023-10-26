import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { ButtonComponent } from '../components/button'

export default function Page () {
  return (
    <View className="flex-1 items-center justify-center bg-indigo-700">
      <Stack.Screen options={{ headerShown: false }}/>
      <ButtonComponent>
        <Text className="text-white font-bold text-lg">Teste</Text>
      </ButtonComponent>
    </View>
  )
}
