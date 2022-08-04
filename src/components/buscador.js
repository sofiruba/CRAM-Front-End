import React from 'react'
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';

export default function Buscador() {
    return (
        <View >
            <TextInput placeholder="        Buscar..."
            />
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