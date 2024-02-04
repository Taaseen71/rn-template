import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LogIn, SignUp, Fetch, ReactContext } from '@screens';
import React, {useState} from 'react'


        

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const Stack = createNativeStackNavigator();
    

    
    const Authorized = () => (
        <Stack.Navigator>
            <Stack.Screen name="Home">{() => <HomeScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}</Stack.Screen>
            <Stack.Screen name="Fetch">{() => <Fetch isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}</Stack.Screen>

        </Stack.Navigator>
    )

    const UnAuthorized = () => (
        <Stack.Navigator>
            <Stack.Screen name="Log In">
                {() => <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> }
            </Stack.Screen>
            <Stack.Screen name="Sign Up" component={SignUp}/>
            <Stack.Screen name="ReactContext" component={ReactContext}/>
            {/* <Stack.Screen name={JSON.stringify(isLoggedIn) } component={LogIn}/> */}
            {/* <Stack.Screen name="Details" component={Details} /> */}
            {/* <Stack.Screen name="Details">
                {(props) =>
                <Details
                    {...props} 
                    // extraData={"someData"}
                /> 
                }
            </Stack.Screen> */}
        </Stack.Navigator>
    )
    
  return (isLoggedIn ? <Authorized/> : <UnAuthorized/>)
}

export default Navigation