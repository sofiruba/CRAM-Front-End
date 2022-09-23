import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native'
import LoginForm from '../components/LoginForm.js'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {

  const navigation = useNavigation();
   const login = async (username, password) => {
    let usuario = {"username": username, "password": password}
    return axios.post('http://localhost:3000/auth/login', usuario)
      .then(res => {
        if (res.status = 201) {
          let user = res.data
          navigation.replace('Home', {user}) 
        }
        else {
          alert('Vuelva a intentar')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <SafeAreaView style={styles.pag}>
    <ScrollView >

      <View style={styles.container} >
        <Image style={styles.img} source={require('../assets/icon.png')}></Image>
        <LoginForm login={login}></LoginForm>      
        <Text  onPress={() => navigation.navigate("Register")} style={styles.texto}>¿Todavía no te registraste?</Text>
      </View >

    </ScrollView >
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 400,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    marginTop: 100,
  },
  pag: {
    backgroundColor: "#F7D250",
    height: 1000,
  },
  texto: {
    color: '#9B791E',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
});
