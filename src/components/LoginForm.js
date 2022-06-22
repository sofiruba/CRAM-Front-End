
import { useState, useEffect, React } from "react";
import Axios from "axios";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Usuario } from '../assets/usuario.png'


export default function LoginForm() {
  const tailwind = useTailwind();
  return (
       <View style={styles.container}>
          <View style={tailwind("mt-8 space-y-6")}>
            <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
            <Image style={styles.imageStyle} source={require('../assets/usuario.png')}/>
              <TextInput
                placeholder="Nombre de Usuario"
                style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}
              />
              </View>
              </View>
              <View style={tailwind("mt-8 space-y-6")}>
                <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
                  
                  <TextInput
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}>
                  </TextInput>
                </View>
              </View>
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
  margin:{
    margin:'2%',
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