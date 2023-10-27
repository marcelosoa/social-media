import { Feather } from '@expo/vector-icons'
import AuthContext from 'context/useAuthContext'

import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <AuthContext>
      <Tabs>
        <Tabs.Screen
          name="home/home"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <Feather name="code" color={color} size={size} />,
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="favorites/favorites"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <Feather name="star" color={color} size={size} />,
            title: 'Favorites',
          }}
        />
      </Tabs>
    </AuthContext>
  )
}
