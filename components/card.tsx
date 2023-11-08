import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { View, Image, Text, Pressable } from 'react-native'

type CardProps = {
  category: string
  source: object
  title: string
  description: string
  location: string
  price: string
}

export function CardComponent({ source, title, description, location, price, category }: CardProps) {
  return (
    <View className="bg-primary w-full h-36 mt-6 pr-4">
      <Pressable onPress={() => router.push('/(item)/item')}>
      <View className="flex items-center flex-row">
        <View className="mt-2">
          <Image source={source} className="w-52 h-36" />
        </View>
        <View className="flex items-center pl-2">
          <View>
            <Text className="text-white mt-2">{category}</Text>
            <Text className="text-white">{title}</Text>
          </View>
          <Text className="text-white">{description}</Text>
          <View className='mt-16 flex items-center flex-row'>
            <AntDesign name='contacts' size={24}/>
            <Text className="text-white">{location}</Text>
          </View>
        </View>
      </View>
      </Pressable>
    </View>
  )
}
