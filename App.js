import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Main from './navigation/main.js';
import HomeScreen from './src/screens/home.js';
import { TailwindConfig } from './tailwind.config';

export default function App() {
  return (
    <HomeScreen></HomeScreen>
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