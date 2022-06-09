import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Login  from './src/screens/login.js';
import Home from './src/screens/home.js'

export default function App() {
  return (
    <View>
      <Login/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    position: 'static',
    flex: 0.5,
    height: 10,
    width: 10,

  },

});
