import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';
import LoginForm from '../components/LoginForm';

export default function LoginScreen({ navigation }) {

  return (
    <TailwindProvider utilities={utilities}>
      <View style={styles.pag}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/icon.png')}></Image>
          <LoginForm style={styles.margin}></LoginForm>
        </View>
      </View>
    </TailwindProvider>

  )
}
//ver estilo d register 

const styles = StyleSheet.create({
  img: {
    height: '90%',
    width: '90%',
    marginBottom: '15%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  pag: {
    backgroundColor: '#F5D2F6',
    height: '100%',
    width: '100%',
  },
  margin: {
    marginTop: '5px',
    margin: '10%',
    marginBottom: '5%',
  },

  texto: {
    color: '#D99734',
    marginTop: '10px',
    textDecorationLine: 'underline',
    fontStyle: 'bold'
  },
  r: {
    marginTop: '5px',
    marginBottom: '5%',
    position: 'relative',
  },
});
