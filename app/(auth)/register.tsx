import { Feather } from '@expo/vector-icons'
import { ButtonComponent } from 'components/button'
import { InputComponent } from 'components/input'
import { AuthContext } from 'context/useAuthContext'

import { Stack } from 'expo-router'
import { useContext, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp, loading } = useContext(AuthContext)
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <InputComponent
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        secureTextEntry={false}
        value={email}
        disabled={false}
        startIcon={<Feather name="mail" size={24} />}
      />

      <InputComponent
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        disabled={false}
        endIcon={<Feather name="eye" size={24} />}
      />
      {loading ? (
        <ActivityIndicator color={'#fff'} size={'small'} />
      ) : (
        <ButtonComponent onPress={() => signUp({ email, password })}>
          <Text className="text-text font-bold text-lg">Login</Text>
        </ButtonComponent>
      )}
    </View>
  )
}
