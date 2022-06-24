import React from 'react'
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';


export default function Buscador() {
    const tailwind = useTailwind();
    return (
        <View style={[styles.container, tailwind("rounded-full shadow-sm -space-y-px")]}>
            <TextInput placeholder="        Buscar..."
                style={[tailwind("appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 lg:text-lg"), styles.busca]}>
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    busca: {
        backgroundColor: 'white',
        opacity: '0.3',
        marginBottom: '0px',
        marginTop: '0px',
        color: 'white',
        width: '400px',
        fontStyle: 'italic',
        height: '30px',
        borderRadius: '8px',
        boxShadow: "7px 7px 5px rgba(0, 0, 0, 0.1)",
        fontSize: '14px',
    },
    container: {
        justifyContent: 'center',
        marginTop: '10px',
        alignItems: 'center',

      },
})