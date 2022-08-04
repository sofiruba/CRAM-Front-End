import React from 'react'
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';

export default function Buscador() {
    return (
        <View style={styles.busca}>
            <TextInput placeholder="        Buscar..."
            />
        </View>
    )
}
const styles = StyleSheet.create({
    busca: {
        backgroundColor: 'white',
        marginBottom: '2%',
        marginTop: '1%',
        width: '95%',
        height: '3%',
        opacity: '0.3',
        color: 'white',
        fontStyle: 'italic',
        borderRadius: 8,
        boxShadow: "7% 7% 5% rgba(0, 0, 0, 0.1)",
        fontSize: 14,
    },
    container: {
        justifyContent: 'center',
        marginTop: '5%',
        alignItems: 'center',

      },
})