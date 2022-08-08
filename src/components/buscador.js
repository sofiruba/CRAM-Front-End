import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

export default function Buscador() {
    return (
        <View style={styles.busca}>
            <TextInput  placeholder="        Buscar..."/>
        </View>
    )
}
const styles = StyleSheet.create({
    busca: {
        backgroundColor: 'white',
        marginBottom: '2%',
        marginTop: '10%',
        width: '85%',
        height: '3%',
        opacity: 0.3,
        color: 'white',
        fontStyle: 'italic',
        borderRadius: 8,
        shadowColor: "7% 7% 5% rgba(0, 0, 0, 0.1)",
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8%',
        textAlign: 'center',
    },
})


//* FILTROS FUENTE:Shippori Antique