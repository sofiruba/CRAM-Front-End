import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../src/screens/login';
import HomeScreen from '../src/screens/home';
const Stack = createNativeStackNavigator();
export default function Main (){
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
    
        </Stack.Navigator>
      </NavigationContainer>
    )
} 