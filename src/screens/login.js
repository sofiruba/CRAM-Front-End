import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';
import LoginForm from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {

  const navigation = useNavigation();
  /*const login = async (username, password) => {
    let nuevo_usuario = {"username": username, "password": password}
    return axios.post('http://localhost:3000/auth/login', nuevo_usuario)
      .then(res => {
        if (res.status = 201) {
          navigation.navigate('Home')
        }
        else {
          alert('Volver a ingresar') 
        }
      })
      .catch(error => {
        console.error('error', error)
      })
  }*/

 const login = () =>{
    return navigation.navigate('Home')
 }
 
  return (
    <TailwindProvider utilities={utilities}>
      <View style={styles.pag}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/icon.png')}></Image>
          <LoginForm login={ login}></LoginForm>
        </View>
      </View>
    </TailwindProvider>

  )
}


const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 375,
    marginTop: '40%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8%',
    marginTop: '50%',
  },
  pag: {
    backgroundColor: "#F5D2F6",
    height: '100%',
    width: '100%',


  },
});
