import { Text, KeyboardAvoidingView, View, TouchableOpacity, Button } from 'react-native'
import { useContext, useState } from 'react'
import { InputComponent } from 'components/input'
import { ButtonComponent } from 'components/button'
import { useAuthContext } from 'context/useAuthContext'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

import { FIRESTORE_DB } from 'firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(useAuthContext)

  // const addNew = async () => {
  //   console.log('add')

  //   const doc = addDoc(
  //     collection(FIRESTORE_DB, 'TODOS'), 
  //     {title: 'tester', done: false})
  //     console.log('added doc', doc)
  // }

  return (
    <KeyboardAvoidingView className="items-center justify-center bg-background text-text flex-auto">
      <View className="w-full">
        <InputComponent
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

      <Button title='Register' onPress={() => router.replace('/(auth)/register')}/>

      <View className="flex flex-row justify-end items-end w-full mr-7 mt-3">
        <TouchableOpacity onPress={() => router.push('/(auth)/recovery')}>
          <Text className="text-white">Forgot Access?</Text>
        </TouchableOpacity>
      </View>

      <ButtonComponent onPress={() => signIn({ email, password })}>
        <Text className="text-text font-bold text-lg">Login</Text>
      </ButtonComponent>

      {/* <Button title='teste doc' onPress={() =>addNew()}/> */}
    </KeyboardAvoidingView>
  )
}
