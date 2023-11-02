import { Text, KeyboardAvoidingView, View, TouchableOpacity, ActivityIndicator} from 'react-native'
import { useContext, useState } from 'react'
import { InputComponent } from 'components/input'
import { ButtonComponent } from 'components/button'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { AuthContext } from 'context/useAuthContext'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = getAuth()

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/home/home')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <KeyboardAvoidingView className="items-center justify-center bg-background text-text flex-auto">
      <View className="w-full">
        <InputComponent
          startIcon={<Feather name='mail' size={16} color={'#fff'}/>}
          placeholder="email"
          disabled={false}
          onChangeText={(email) => setEmail(email)}
          value={email}
          secureTextEntry={false}
        />
      </View>

      <View className="w-full">
        <InputComponent
          placeholder="password"
          disabled={false}
          onChangeText={(password) => setPassword(password)}
          value={password}
          endIcon={<Feather name="eye" size={16} color={'#fff'} />}
          secureTextEntry={true}
        />
      </View>

      <View className="flex flex-row justify-between items-end w-full p-3">
      <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
          <Text className="text-white">Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(auth)/recovery')}>
          <Text className="text-white">Forgot Access?</Text>
        </TouchableOpacity>
      </View>

      {loading ? <ActivityIndicator color={'#fff'} size={'small'} /> : <ButtonComponent onPress={signIn}>
        <Text className="text-text font-bold text-lg">Login</Text>
      </ButtonComponent>}

    </KeyboardAvoidingView>
  )
}
