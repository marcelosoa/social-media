import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Favorites () {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Favorites</Text>
      <Link href={'/'}>
        <Text>
          Logout
        </Text>
      </Link>
    </View>
  )
}