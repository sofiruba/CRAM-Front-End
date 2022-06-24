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
          <View>
            <Text onPress={navigation.navigate('Register')}>No tienes cuenta todavia?</Text>
          </View>
        </View>
      </View>
    </TailwindProvider>

  )
}
//ver estilo d register 

const styles = StyleSheet.create({
  img: {
    height: '200px',
    width: '500px',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pag: {
    backgroundColor: '#F5D2F6',
    height: '100%',
    width: '100%',
  },
  margin: {
    marginTop: '15px',
  },
  texto: {
    color: '#D99734',
    marginTop: '10px',
    textDecorationLine: 'underline',
    fontStyle: 'bold'
  }
});
