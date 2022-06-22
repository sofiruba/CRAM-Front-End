
import React from 'react';
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Usuario } from '../assets/usuario.png'


export default function LoginForm() {
  const tailwind = useTailwind();
  return (

          <View style={tailwind("mt-8 space-y-6")}>
            <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
              <TextInput
                placeholder="Nombre de Usuario"
                style={[tailwind("appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}
              />

              <View style={tailwind("mt-8 space-y-6")}>
                <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
                  <Image style={styles.img} source={require('../assets/usuario.png')}></Image>
                  <TextInput
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    style={[tailwind("appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}>
                  </TextInput>
                </View>
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
  },
  img: {
    height: '10px',
    width: '10px',
  },
  margin:{
    margin:'2%',
  }

});