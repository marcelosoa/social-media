import { TextInput, View } from "react-native";

type InputProps = {
  placeholder: string,
  onChangeText: (value: string) => void
  error?: string,
  disabled: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode,
  secureTextEntry: any
  value: string
}

export function InputComponent ({ placeholder, onChangeText, startIcon, endIcon, secureTextEntry, value, error,...props }: InputProps) {
  return (
    <View className="flex items-center flex-row pt-1 pb-3 pl-1 pr-4 gap-2 m-3 rounded-lg bg-secondary">
      {startIcon}
      <TextInput 
        className="flex-1 text-text text-sm items-center"
        placeholder={placeholder}
        placeholderTextColor={'#fff'}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        {...props}
      />
      {endIcon}
      {error && <View className="text-red-600">{error}</View>}
    </View>
  )
}