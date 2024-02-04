import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = ({navigation, setIsLoggedIn}) => {
  navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Button title='Log Out' onPress={() => {setIsLoggedIn(false)}}/>
      <Button title='Fetch' onPress={() => {navigation.navigate('Fetch')}}/>
    </View>
  )
}

export default HomeScreen