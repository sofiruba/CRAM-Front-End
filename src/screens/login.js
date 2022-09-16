import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native'
import LoginForm from '../components/LoginForm.js'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {

  const navigation = useNavigation();
  /* const login = async (username, password) => {
    let usuario = {"username": username, "password": password}
    return axios.post('http://localhost:3000/auth/login', usuario)
      .then(res => {
        if (res.status = 201) {
          let user = res.data
          navigation.navigate('Home', {user}) mandar al usuario por parametro para desp poder crear reviews, y todo eso 
        }
        else {
          console.log(res.message)
        }
      })
      .catch(error => {
        console.error('error', error)
      })
  }
*/
let user = {IdUsuario: 1, username: 'jsjskd', nombre: 'jdddk'}
  const login = () => {
    return navigation.navigate('Home' , {user}) 
  }

  return (
    <SafeAreaView >
    <ScrollView >
    <View style={styles.pag}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "" ? "padding" : "height"}>
        <Image style={styles.img} source={require('../assets/icon.png')}></Image>
        <LoginForm login={login}></LoginForm>      
        <Text onPress={() => navigation.navigate("Register")} style={styles.texto}>¿Todavía no te registraste?</Text>
      </KeyboardAvoidingView >
    </View>
    </ScrollView >
    </SafeAreaView >
  )
}


const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 375,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    marginTop: 200,
  },
  pag: {
    backgroundColor: "#F7D250",
    height: '100%',
    width: '100%',
  },
  texto: {
    color: '#000000',
    textAlign: 'center'
  },
});
