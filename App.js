import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/login.js';
import HomeScreen from './src/screens/home.js';
import DrawerNav from './navigation/drawer.js';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindConfig } from './tailwind.config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './navigation/main.js';

export default function App() {
  return (
    <Main></Main>
  )
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