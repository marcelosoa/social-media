import { Tabs } from "expo-router";

export default function TabLayout () {
  return (
    <Tabs>
      <Tabs.Screen name="home/home" options={{
       headerShown: false,
       title: 'teste 2'
      }}/>
    </Tabs>
  )
}