import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import  Login  from './src/screens/login.js';
import Home from './src/screens/home.js'
import utilities from './tailwind.json';


export default function App() {
  return (

      <TailwindProvider utilities={utilities}>
            <View style={styles.pag}>
      <Login></Login>
      </View>
	</TailwindProvider>

   


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
