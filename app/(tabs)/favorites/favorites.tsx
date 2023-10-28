import { ButtonComponent } from "components/button";
import { useAuthContext } from "context/useAuthContext";
import { Link } from "expo-router";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";

export default function Favorites () {
  const { logout } = useContext(useAuthContext)

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="text-white">Favorites</Text>
    </View>
  )
}