import { Stack, Tabs } from "expo-router";

export default function StackLayout () {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index"/>
      <Tabs.Screen name="(tabs)" options={{
        headerShown: false,
      }}/>
    </Stack>
  )
}