import { AntDesign } from "@expo/vector-icons";
import { useAuthContext } from "context/useAuthContext";
import { router } from "expo-router";
import { getAuth } from "firebase/auth";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";

const auth = getAuth()



export default function Profile () {
  const { logout, user } = useContext(useAuthContext)  
  return (
    <View className="bg-primary flex-1 justify-between flex-row pt-16 pl-6 pr-6">
      <View>
      <Text className="text-white">{user?.email}</Text>
      </View>
      
      <AntDesign name="logout" size={24} color={'#fff'} onPress={logout}/>
    </View>
  )
}