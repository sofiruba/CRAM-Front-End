import React from 'react';
import LoginScreen from '../src/screens/login';
import HomeScreen from '../src/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../src/screens/register';
import Profile from '../src/screens/Restaurantprofile'
const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}