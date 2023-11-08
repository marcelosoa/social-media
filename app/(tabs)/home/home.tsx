import { View, ScrollView, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'context/useAuthContext'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { HeaderComponent } from 'components/header'
import { CardComponent } from 'components/card'

export default function Home() {
  const { logout } = useContext(AuthContext)
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth()

  const items = [
    {
      title: 'Cobalt LTZ 2013',
      description: 'a venda de novo',
      uri: 'https://revistacarro.com.br/wp-content/uploads/2018/05/image.gen_11.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 1,
    },
    {
      title: 'SIENA 2013',
      description: 'a venda de novo',
      uri: 'https://revistacarro.com.br/wp-content/uploads/2018/05/2492.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 2,
    },
    {
      title: 'Honda Fit 2014',
      description: 'a venda de novo',
      uri: 'https://production.autoforce.com/uploads/version/profile_image/3743/comprar-ex_6071fb9f3f.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 3,
    },
    {
      title: 'Land Rover Vogue',
      description: 'a venda de novo',
      uri: 'https://i.pinimg.com/originals/de/61/88/de6188381ac8dff0499a96eac7cf9388.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 4,
    },
    {
      title: 'Land Rover Vogue',
      description: 'a venda de novo',
      uri: 'https://i.pinimg.com/originals/de/61/88/de6188381ac8dff0499a96eac7cf9388.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 5,
    },
    {
      title: 'Land Rover Vogue',
      description: 'a venda de novo',
      uri: 'https://i.pinimg.com/originals/de/61/88/de6188381ac8dff0499a96eac7cf9388.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 6,
    },
    {
      title: 'Land Rover Vogue',
      description: 'a venda de novo',
      uri: 'https://i.pinimg.com/originals/de/61/88/de6188381ac8dff0499a96eac7cf9388.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 7,
    },
    {
      title: 'Land Rover Vogue',
      description: 'a venda de novo',
      uri: 'https://i.pinimg.com/originals/de/61/88/de6188381ac8dff0499a96eac7cf9388.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 8,
    },
    {
      title: 'Land Rover Vogue',
      description: 'a venda de novo',
      uri: 'https://i.pinimg.com/originals/de/61/88/de6188381ac8dff0499a96eac7cf9388.png',
      location: 'Rio de Janeiro',
      price: '299.99',
      category: 'Apartamento para Alugar',
      date: '10/11/1970',
      id: 9,
    },
  ]

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  return (
    <ScrollView className="bg-background flex-1">
      <View className="flex items-center">
        <HeaderComponent filterIcon={<AntDesign name="filter" color={'#fff'} size={16} />} />

        <View className="">
          {items.map((item, index) => (
            <CardComponent
              key={index}
              category={item.category}
              title={item.title}
              description={item.description}
              source={{ uri: item.uri }}
              location={item.location}
              price={item.price}
              date={item.date}
            />
          ))}
        </View>
      </View>

      <Pressable onPress={logout}>
        <Text>Deslogar</Text>
      </Pressable>
    </ScrollView>
  )
}
