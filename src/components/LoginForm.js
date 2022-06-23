import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';



const login = async (usern, pass) => {
  const user = { username: usern, password: pass }
  return axios.post('http://localhost:3000/auth/login', user)
    .then(res => {
      if (res.status < 300) { // fijarse cual es el codigo
        navigation.navigate('Home')
      }
      else {
        alert('Volver a ingresar') // hay q ver manera de hacer diferentes dependiendo el problema
      }
    })
    .catch(error => {
      console.error('error', error)
    })
}

export default function LoginForm({ navigation }) {
  const tailwind = useTailwind();
  const [user, setUser] = useState({})
  return (
    <View style={styles.container}>
      <View style={tailwind("mt-8 space-y-6")}>
        <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
          <Image style={styles.imageStyle} source={require('../assets/usuario.png')} />
          <TextInput
            placeholder="Nombre de Usuario"
            onChangeText={(text) => setUser({ ...user, username: text })}
            style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}
          />
        </View>
      </View>
      <View style={tailwind("mt-8 space-y-6")}>
        <View style={tailwind("rounded-md shadow-sm -space-y-px")}>

          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setUser({ ...user, password: text })}
            style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}>
          </TextInput>
        </View>
      </View>
      <Button title="Ingresar" onPress={login(user.username, user.password)} > </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  formstyle: {
    backgroundColor: 'white',
    marginBottom: '0px',
    marginTop: '0px',
    flex: 1
  },
  margin: {
    margin: '2%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

});