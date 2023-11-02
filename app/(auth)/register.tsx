import { Feather } from '@expo/vector-icons'
import { ButtonComponent } from 'components/button'
import { InputComponent } from 'components/input'
import { AuthContext } from 'context/useAuthContext'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { useContext, useState } from 'react'
import { View, Text, ActivityIndicator, KeyboardAvoidingView } from 'react-native'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = getAuth()
  // const { signUp, loading } = useContext(AuthContext)

  const signUp = async () => {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert('check your email')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <KeyboardAvoidingView behavior="padding" className='w-full items-center'>
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
          <ButtonComponent onPress={signUp}>
            <Text className="text-text font-bold text-lg">Login</Text>
          </ButtonComponent>
        )}
      </KeyboardAvoidingView>
    </View>
  )
}
