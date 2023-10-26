import { Pressable } from "react-native";

type ButtonProps = {
  children: React.ReactNode
}

export function ButtonComponent ({children}: ButtonProps) {
  return (
    <Pressable className="bg-green-200 rounded-lg px-16" onPress={() => console.log('teste')}>
      {children}
    </Pressable>
  )
}