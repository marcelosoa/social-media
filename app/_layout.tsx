import { Stack, Tabs } from "expo-router";

export default function StackLayout () {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }}/>
      <Tabs.Screen name="(tabs)" options={{
        headerShown: true,
        headerTitle: 'teste TABS',

      }}/>
    </Stack>
  )
}