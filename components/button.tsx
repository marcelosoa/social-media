import { Pressable } from "react-native";

type ButtonProps = {
  children: React.ReactNode
  onPress: () => void
}

export function ButtonComponent ({ children, onPress }: ButtonProps) {
  return (
    <Pressable className="bg-secondary w-80 p-2 rounded-lg mt-10 items-center" onPress={onPress}>
      {children}
    </Pressable>
  )
}