import React from 'react'
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Usuario } from '../assets/usuario.png'

export default function Buscador() {
    const tailwind = useTailwind();
    return (
        <View>
            <TextInput placeholder="Nombre de Usuario"
                style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.busca]}>
                </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    busca: {
      backgroundColor: 'grey',
      opacity: '0.3',
      marginBottom: '0px',
      marginTop: '0px',
      flex: 1
    }
})