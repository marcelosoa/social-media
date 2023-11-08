import { View } from 'react-native'
import { InputComponent } from './input'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

type HeaderProps = {
  filterIcon: React.ReactNode
}

export function HeaderComponent({ filterIcon }: HeaderProps) {
  const [search, setSearch] = useState('')
  return (
    <View className="mt-12 items-center justify-between w-full flex-row">
      <InputComponent
        startIcon={<AntDesign name="search1" size={24} />}
        disabled={false}
        onChangeText={(search) => setSearch(search)}
        secureTextEntry={false}
        value={search}
        placeholder="Pesquisar"
      />
    </View>
  )
}
