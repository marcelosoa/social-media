import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function RecoveryAccess () {
  return (
    <View className="flex-1 bg-background">
      <Stack.Screen options={{
        headerShown: true,
        headerTitle: 'Recovery',
        headerTitleStyle: {
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: '#3b3b3b'
        }
      }}/>
      <Text>Recovery</Text>
    </View>
  )
}