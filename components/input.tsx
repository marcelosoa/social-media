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

export function InputComponent ({ placeholder, onChangeText, startIcon, endIcon, secureTextEntry, value,...props }: InputProps) {
  return (
    <View>
      {startIcon}
      <TextInput 
        className="bg-secondary w-96 p-3 rounded-lg mt-10"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {endIcon}
    </View>
  )
}