import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native'
import LoginForm from '../components/LoginForm.js'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {

  const navigation = useNavigation();
  /* const login = async (username, password) => {
    let nuevo_usuario = {"username": username, "password": password}
    return axios.post('http://localhost:3000/auth/login', nuevo_usuario)
      .then(res => {
        if (res.status = 201) {
          navigation.navigate('Home')
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
  const login = () => {
    return navigation.navigate('Home')
  }

  return (
    <View style={styles.pag}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "" ? "padding" : "height"}>
        <Image style={styles.img} source={require('../assets/icon.png')}></Image>
        <LoginForm login={login}></LoginForm>      
        <KeyboardAvoidingView style={styles.texto}>
        <Text onPress={() => navigation.navigate("Register")}>¿Todavía no te registraste?</Text>
      </KeyboardAvoidingView >
      </KeyboardAvoidingView>

    </View>
  )
}


const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 375,
    marginTop: 100,
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
    position: 'absolute',
    marginTop: 5,
  },
});
