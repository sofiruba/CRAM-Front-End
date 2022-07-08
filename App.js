import React from 'react'
import 'react-native-gesture-handler'
import { View, Text, StyleSheet } from 'react-native';
import Main from './navigation/main.js';
import HomeScreen from './src/screens/home.js';
import { TailwindConfig } from './tailwind.config';

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