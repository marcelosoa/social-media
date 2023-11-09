import { InputComponent } from 'components/input'
import { AuthContext } from 'context/useAuthContext'
import { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { AvatarComponent } from 'components/avatar'
import { ButtonComponent } from 'components/button'

export default function EditProfile() {
  const { user, loading, updateUserInfo } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '')

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setPhotoURL(result.assets[0].uri)
    }
  }

  const takePicture = async () => {
    let cameraResp = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    })

    if (!cameraResp.canceled) {
      setPhotoURL(cameraResp.assets[0].uri)
    }
  }

  return (
    <View className="flex-1 bg-background items-center">
      <View className="mt-16">
        <Text className="text-white">Insira suas novas informações abaixo</Text>
      </View>

      <View className="w-full">
        <View className="mt-4 p-4 items-center">
          <Text className="text-white">Seu nome de usuário: </Text>
          <InputComponent
            placeholder="@example"
            secureTextEntry={false}
            disabled={false}
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View className="items-center">
          {photoURL && <AvatarComponent source={{ uri: photoURL }} size="large" />}
          <ButtonComponent onPress={pickImage}>
            <Text className="text-white">Selecione a sua nova imagem de perfil</Text>
          </ButtonComponent>

          <ButtonComponent onPress={takePicture}>
            <Text className="text-white">Tirar foto</Text>
          </ButtonComponent>
        </View>

        <View className='items-center '>
        <ButtonComponent onPress={() => updateUserInfo({ name, photoURL})}>
          <Text className='text-white'>Atualizar Perfil</Text>
        </ButtonComponent>

        </View>
      </View>
    </View>
  )
}
