import AuthContext from 'context/useAuthContext'
import { Stack, Tabs } from 'expo-router'

export default function StackLayout() {
  return (
    <AuthContext>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="(auth)/recovery"
          options={{
            headerTitle: 'recovery',
          }}
        />
        <Stack.Screen
          name="(auth)/register"
          options={{
            headerTitle: 'register',
          }}
        />
        <Stack.Screen 
          name='(profile)/profile'
          options={{
            headerTitle: 'profile'
          }}
        />
        <Stack.Screen 
          name='(profile)/edit'
          options={{
            headerTitle: 'Edit'
          }}
        />
        <Tabs.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </AuthContext>
  )
}
