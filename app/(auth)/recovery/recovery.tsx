import { Feather } from '@expo/vector-icons'
import { ButtonComponent } from 'components/button'
import { InputComponent } from 'components/input'
import { AuthContext } from 'context/useAuthContext'
import { Stack } from 'expo-router'
import { useContext, useState } from 'react'
import { View, Text } from 'react-native'

export default function RecoveryAccess() {
  const [email, setEmail] = useState('')

  const { resetPassword } = useContext(AuthContext)
  return (
    <View className="flex-1 bg-background">
      <Stack.Screen
        options={{
          headerTitle: 'Recovery',
        }}
      />
      
      <View className="items-center justify-center flex-1">
      <Text className="text-white p-4 font-bold">Insert bellow your email to recovery access</Text>
        <InputComponent
          startIcon={<Feather name="mail" size={16} color={'#fff'} />}
          placeholder="Email recovery"
          onChangeText={(email) => setEmail(email)}
          value={email}
          secureTextEntry={false}
          disabled={false}
        />

        <ButtonComponent onPress={() => resetPassword(email)}>
          <Text className='text-white'>Recovery Access</Text>
        </ButtonComponent>
      </View>
    </View>
  )
}
