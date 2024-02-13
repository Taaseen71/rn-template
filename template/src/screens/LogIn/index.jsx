import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import globalStyle from 'src/styles/GlobalStyles';


const LogIn = ({ setIsLoggedIn}) => {
  const navigation = useNavigation()
  const [pwd, setPwd] = useState('')
  const [email, setEmail] = useState('')


  return (
    <View>
      <TextInput 
        style={globalStyle().TextInputComponent}
        onChangeText={setEmail} 
        value={email} 
        placeholder={"Enter Email"}
      />
      <TextInput 
        style={globalStyle().TextInputComponent}
        value={pwd} 
        onChangeText={setPwd} 
        placeholder={"Enter Pwd"}
      />
      <TouchableOpacity style={globalStyle().button} onPress={() => {}}><Text>Submit</Text></TouchableOpacity>
      
      <Button title='Log In' onPress={() => {setIsLoggedIn(true)}}/>
      <Button title="Don't have an account? Sign Up" onPress={() => {navigation.navigate('Sign Up')}}/>
    </View>
  )
}

export default LogIn