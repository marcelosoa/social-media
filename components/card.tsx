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
  date: string
}

export function CardComponent({
  source,
  title,
  description,
  location,
  price,
  date,
  category,
}: CardProps) {
  return (
    <View className="bg-primary h-36 mt-2 pr-8">
      <View className="flex items-center flex-row">
        <View className="w-52 h-36 ">
          <Image source={source} className="w-52 h-36" />
        </View>
        <View className="flex items-center">
          <View className="text-sm font-sans ml-2">
            <Text className="text-white mt-2 font-sans">{category}</Text>
            <Text className="text-white font-sans">{title}</Text>
          </View>
          <View className="mt-16 flex items-center flex-row gap-2">
            <AntDesign name="contacts" size={24} />
            
            <View className='flex items-center flex-row'>
              <Text className="text-white font-sans">{location}</Text>
              <Text className="text-white font-sans">{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
