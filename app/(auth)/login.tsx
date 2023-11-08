import {
  Text,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import { useContext, useState } from 'react'
import { InputComponent } from 'components/input'
import { ButtonComponent } from 'components/button'
import { AntDesign, Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { AuthContext } from 'context/useAuthContext'
import { useTogglePassword } from 'hooks/useTogglePassword'

export default function Login() {
  const [email, setEmail] = useState('')
  const { signIn, loading } = useContext(AuthContext)
  const [password, setPassword] = useState('')
  const { togglePassword, visibility } = useTogglePassword()

  return (
    <View className="items-center justify-center bg-background text-text flex-1">
      <Image
        source={require('../../assets/images/logo1.png')}
        className="h-80 w-full"
        resizeMode="contain"
      />
      <KeyboardAvoidingView className="w-full items-center">
        <InputComponent
          startIcon={<Feather name="mail" size={16} color={'#fff'} />}
          placeholder="email"
          disabled={false}
          onChangeText={(email) => setEmail(email)}
          value={email}
          secureTextEntry={false}
        />

        <InputComponent
          placeholder="password"
          disabled={false}
          onChangeText={(password) => setPassword(password)}
          value={password}
          endIcon={
            visibility ? (
              <AntDesign name="eye" onPress={togglePassword} size={16} color={'#fff'} />
            ) : (
              <AntDesign name="eyeo" onPress={togglePassword} size={16} color={'#fff'} />
            )
          }
          secureTextEntry={visibility}
        />

        <View className="flex flex-row justify-between items-end w-full p-3">
          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text className="text-white font-sans">Criar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/(auth)/recovery')}>
            <Text className="text-white font-sans">Esqueceu seu acesso?</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator color={'#fff'} size={'small'} />
        ) : (
          <ButtonComponent onPress={() => signIn({ email, password })}>
            <Text className="text-text font-sans text-lg">Entrar</Text>
          </ButtonComponent>
        )}
      </KeyboardAvoidingView>
    </View>
  )
}
