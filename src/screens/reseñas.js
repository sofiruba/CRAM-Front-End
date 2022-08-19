import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import {Arvo_400Regular, ShipporiAntiqueB1_400Regular, useFonts } from '@expo-google-fonts/dev'
import ListadoHome from '../components/listadoHome'
import Filtros from '../components/filtros'
import Buscador from '../components/buscador'

//* Fuentes: Arvo , slabo27 px y para el seguidos y para ti Shippori Antique B1

export default function Reseñas() {
    const [lugares, setLugares] = useState([{
        "IdLugar": "aaa123",
        "nombre": "Las Violetas",
        "description": "Confiteria",
        "foto": require('../assets/lasvioletas.jpg'),
    },
    {
        "IdLugar": "bbb456",
        "nombre": "Le Pain Quotidien",
        "description": "Confiteria",
        "foto": require('../assets/Restaurante-ejemplo.jpg'),
    },])
    const headers = {
        "Content-Type": "application/json",
    };
    const getLugares = () => {
        return axios.get('http://localhost:3000/lugares', { headers })
            .then(res => {
                const l = res.data
                setLugares(l)
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        getLugares()
    }, [])

    console.log(lugares)
    let [loaded] = useFonts({
        Arvo_400Regular,
        ShipporiAntiqueB1_400Regular,
      });
    
    if (!loaded) {
        return null;
    }
    return (
        <KeyboardAvoidingView style={[{fontFamily: 'Arvo_400Regular'},styles.pag]} behavior={Platform.OS === "" ? "padding" : "height"}>
            <View style={styles.container}>
                <View>
                <View style={styles.row}>
                    <Text style={[{fontFamily:'ShipporiAntiqueB1_400Regular'},styles.texto]} >Seguidos</Text>
                    <Text  style={[{fontFamily:'Arvo_400Regular'},styles.texto]}>|</Text>
                    <Text style={[{fontFamily:'ShipporiAntiqueB1_400Regular'},styles.texto]}>Para Ti</Text>
                </View>
                <Buscador />
                <Filtros></Filtros>
                </View>
                <ListadoHome lugares={lugares}></ListadoHome>
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F7D250',
        height: '100%',
        width: '100%',
        flex: 1,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        marginTop: '15%',
    },
    texto: {
        fontSize: 18,
        marginLeft: '2%',
        marginRight: '2%'
    }
})
