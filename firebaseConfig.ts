import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyDCeGxrjDNKgT7gJmD7zafU0YQGxbTlfnQ",
  authDomain: "social-media-a7e24.firebaseapp.com",
  projectId: "social-media-a7e24",
  storageBucket: "social-media-a7e24.appspot.com",
  messagingSenderId: "14120124767",
  appId: "1:14120124767:web:9b05374a938cfc350c76ea"
};

const defaultApp = initializeApp(firebaseConfig);
initializeAuth(defaultApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});
