import { Feather } from '@expo/vector-icons'
import { ButtonComponent } from 'components/button'
import { InputComponent } from 'components/input'
import AuthContext, { useAuthContext } from 'context/useAuthContext'
import { Stack } from 'expo-router'
import { useContext, useState } from 'react'
import { View, Text } from 'react-native'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(useAuthContext)
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
          endIcon={<Feather name='eye' size={24}/>}
        />

        <ButtonComponent onPress={() => signUp({email, password})}>
          <Text className='text-text font-bold'>Register New User</Text>
        </ButtonComponent>
      </View>
  )
}
