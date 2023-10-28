import { AntDesign } from '@expo/vector-icons'
import AuthProvider from 'context/useAuthContext'

import { Stack, Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <AuthProvider>
      <Tabs screenOptions={{
        tabBarStyle: {
          backgroundColor: '#3b3b3b'
        }
      }}>
        <Tabs.Screen
          name="home/home"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <AntDesign name="home" color={color} size={size} />,
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="favorites/favorites"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <AntDesign name="star" color={color} size={size} />,
            title: 'Favorites',
          }}
        />
        <Tabs.Screen
          name="search/search"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <AntDesign name="search1" color={color} size={size} />,
            title: 'Search',
          }}
        />
        {/* <Stack.Screen
          name='(profile)/edit'
          options={{
            headerTitle: 'TESTE EDIT'
          }}
        /> */}
      </Tabs>
    </AuthProvider>
  )
}
