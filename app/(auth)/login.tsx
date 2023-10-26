import { router } from "expo-router";
import { View, Text } from "react-native";
import { ButtonComponent } from "../../components/button";
import { InputComponent } from "../../components/input";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View className="items-center justify-center bg-background text-text">
      <InputComponent
        placeholder='Login'
        disabled={false}
        onChangeText={(email) => setEmail(email)}
        value={email}
        secureTextEntry={false}
      />
       <InputComponent
        placeholder='Password'
        disabled={false}
        onChangeText={(password) => setPassword(password)}
        value={password}
        secureTextEntry={true}
      />
      <ButtonComponent onPress={() => router.push('/(tabs)/home/home')}>
        <Text className="text-text font-bold text-lg">Login</Text>
      </ButtonComponent>
    </View>
  )
}