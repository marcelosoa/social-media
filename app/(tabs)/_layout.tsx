import { AntDesign } from '@expo/vector-icons'
import AuthProvider from 'context/useAuthContext'

import { Tabs } from 'expo-router'

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
          name="search/search"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <AntDesign name="search1" color={color} size={size} />,
            title: 'Search',
          }}
        />
         <Tabs.Screen
          name="messages/messages"
          options={{
            headerShown: true,
            tabBarIcon: ({ size, color }) => <AntDesign name="message1" color={color} size={size} />,
            title: 'Messages',
            headerStyle: {
              backgroundColor: '#8a8a8a'
            }
          }}
        />
      </Tabs>
    </AuthProvider>
  )
}
