import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import {Arvo_400Regular, ShipporiAntiqueB1_400Regular, useFonts } from '@expo-google-fonts/dev'


//* Fuentes: Arvo , slabo27 px y para el seguidos y para ti Shippori Antique B1

export default function Reseñas({props}) {


    const getReseñas = (restaurante) =>{
        return axios.get('http://localhost:3000/reviews/'+ restaurante.IdLugar, { headers })
    }
    let [loaded] = useFonts({
        Arvo_400Regular,
        ShipporiAntiqueB1_400Regular,
      });
    
    if (!loaded) {
        return null;
    }
    useEffect()
    return (
        <KeyboardAvoidingView style={[{fontFamily: 'Arvo_400Regular'},styles.pag]} behavior={Platform.OS === "" ? "padding" : "height"}>
            <View style={styles.container}>

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
