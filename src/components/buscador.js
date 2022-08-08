import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

export default function Buscador() {
    return (
        <View style={styles.busca}>
            <TextInput  style={styles.text} placeholder=" Buscar..."/>
        </View>
    )
}
const styles = StyleSheet.create({
    busca: {
        backgroundColor: 'white',
        width: '80%',
        height: '4%',
        opacity: 0.6,
        color: 'white',
        fontStyle: 'italic',
        borderRadius: 20,
        shadowColor: "7% 7% 5% rgba(0, 0, 0, 0.1)",
        fontSize: 14,
        margin: '9%',
        marginBottom: '15%',
    },
    text:{
        marginTop: '1%',
        marginLeft: '2%',
    }
})


//* FILTROS FUENTE:Shippori Antique