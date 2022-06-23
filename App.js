import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/login.js';
import HomeScreen from './src/screens/home.js'
import { NavigationContainer } from '@react-navigation/native';

import { TailwindConfig } from './tailwind.config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  pag: {
    backgroundColor: '#F6D250',
    height: '100%',
    width: '100%',
  },

});