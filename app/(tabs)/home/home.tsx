import { AvatarComponent } from 'components/avatar'
import { Pressable, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter()
  return (
    <View className="bg-background flex-1">
      <View className="flex items-center justify-between w-full pl-7 pr-7 pt-16 flex-row">
        <View>
          <Pressable onPress={() => router.push('/(profile)/profile')}>
          <AvatarComponent
            size="normal"
            source={{
              uri: 'https://footwearnews.com/wp-content/uploads/2022/04/travis-scott.jpg',
            }}
          />
          </Pressable>
        </View>
        <AntDesign name="star" size={24} color={'#3b3b3b'}/>
      </View>
    </View>
  )
}
