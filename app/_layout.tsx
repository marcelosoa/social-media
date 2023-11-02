import AuthProvider, { AuthContext } from 'context/useAuthContext'
import { Stack, Tabs } from 'expo-router'

export default function StackLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="(auth)/recovery/recovery"
          options={{
            headerTitle: 'recovery',
          }}
        />
        <Stack.Screen
          name="(auth)/register/register"
          options={{
            headerTitle: 'register',
          }}
        />
        <Stack.Screen 
          name='(profile)/profile/profile'
          options={{
            headerTitle: 'profile'
          }}
        />
        <Stack.Screen 
          name='(profile)/edi/edit'
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
    </AuthProvider>
  )
}
