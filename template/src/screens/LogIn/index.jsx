import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LogIn = ({ setIsLoggedIn}) => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Log In</Text>
      <Button title='Log In' onPress={() => {setIsLoggedIn(true)}}/>
      <Button title="Don't have an account? Sign Up" onPress={() => {navigation.navigate('Sign Up')}}/>

    </View>
  )
}

export default LogIn