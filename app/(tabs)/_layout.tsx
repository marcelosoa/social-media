import { AntDesign, Ionicons } from '@expo/vector-icons'
import AuthProvider from 'context/useAuthContext'
import { useFonts } from 'expo-font'

import { SplashScreen, Tabs } from 'expo-router'
import React, { useEffect } from 'react'

export default function LayoutTabs() {
  const [fontsLoaded] = useFonts({
    'Urbanist-Regular': require('../../assets/fonts/Urbanist-Regular.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return <TabLayout />
}
function TabLayout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#3b3b3b',
          },
          tabBarLabelStyle: {
            color: '#fff'
          }
        }}
      >
        {/* <Tabs.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        /> */}
        <Tabs.Screen
          name="home/home"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <Ionicons name="home" color={color} size={size} />,
            title: 'Home',
          }}
        />

        <Tabs.Screen
          name="search/search"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <Ionicons name="search-outline" color={color} size={size} />,
            title: 'Search',
          }}
        />
        <Tabs.Screen
          name="new/new"
          options={{
            headerShown: true,
            tabBarIcon: ({ size, color }) => <Ionicons name="add-circle-outline" color={color} size={size} />,
            title: 'Novo Anúncio',
          
            headerStyle: {
              backgroundColor: '#3b3b3b'
            },
            headerTitleStyle: {
              color: '#fff'
            }
          }}
        />
        <Tabs.Screen
          name="messages/messages"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbox-outline" color={color} size={size} />
            ),
            title: 'Messages',
            headerStyle: {
              backgroundColor: '#8a8a8a',
            },
          }}
        />
        <Tabs.Screen
          name="profile/profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => <Ionicons name="person-outline" color={color} size={size} />,
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#8a8a8a',
            },
          }}
        />
      </Tabs>
    </AuthProvider>
  )
}
