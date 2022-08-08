import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
export default function Buscador() {
    return (
        <View style={styles.busca}>
<<<<<<< HEAD
            <TextInput  placeholder="        Buscar... ">  </TextInput>
=======
            <TextInput  style={styles.text} placeholder=" Buscar..."/>
>>>>>>> c60c22df9b393360eec15a27ab75a0dbcc0454b5
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
<<<<<<< HEAD
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8%',
        textAlign: 'center',
      
    },
    icon: {
        color: 'white',
        width: '15%',
=======
        margin: '9%',
        marginBottom: '15%',
    },
    text:{
        marginTop: '1%',
        marginLeft: '2%',
>>>>>>> c60c22df9b393360eec15a27ab75a0dbcc0454b5
    }
})


//* FILTROS FUENTE:Shippori Antique