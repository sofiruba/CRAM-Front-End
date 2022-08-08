import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

export default function Buscador() {
    return (
        <View >
            <TextInput style={styles.busca} placeholder="        Buscar..."/>
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
        opacity: 0.3,
        color: 'white',
        fontStyle: 'italic',
        borderRadius: 8,
        shadowColor: "7% 7% 5% rgba(0, 0, 0, 0.1)",
        fontSize: 14,
    },
    container: {
        justifyContent: 'center',
        marginTop: '5%',
        alignItems: 'center',

      },
})


//* FILTROS FUENTE:Shippori Antique