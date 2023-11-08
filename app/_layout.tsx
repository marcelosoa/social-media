import AuthProvider, { AuthContext } from 'context/useAuthContext'
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Tabs } from 'expo-router'
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <StackLayout />
}

function StackLayout() {

  return (
    <AuthProvider>
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
          name='(item)/item'
          options={{
            headerTitle: 'item'
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

