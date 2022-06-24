import React from 'react';
import LoginScreen from '../src/screens/login';
import HomeScreen from '../src/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../src/screens/register';
const Stack = createNativeStackNavigator();
export default function Main (){
    return (
        <NavigationContainer  >
        <Stack.Navigator>
          
          <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
       
        </Stack.Navigator>
      </NavigationContainer>
    )
}