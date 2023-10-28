import { InputComponent } from 'components/input'
import { AuthContext } from 'context/useAuthContext';
import { useContext, useState } from 'react'
import { View, Text } from 'react-native'

export default function EditProfile() {
  const { user } = useContext(AuthContext)


  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "")
  
  return (
    <View className="flex-1 bg-background items-center">
      <View className="mt-12">
        <Text className="text-white">Insert your infos to edit bellow</Text>
      </View>
      <View className='w-full'>
        <InputComponent
        placeholder='New username'
        secureTextEntry={false}
        disabled={false}
        value={name}
        onChangeText={(name) => setName(name)}
        />
      </View>
    </View>
  )
}