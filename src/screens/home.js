import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Comfortaa_400Regular, ShipporiAntiqueB1_400Regular, useFonts } from '@expo-google-fonts/dev'
import ListadoHome from '../components/ListadoHome'
import Filtros from '../components/filtros'
import Buscador from '../components/buscador'

//* Fuentes: comfortaa y shipporiAntique
// https://directory.vercel.app/
export const UserContext = createContext({})
export default function HomeScreen(user) {
    const [lugares, setLugares] = useState([{
        "IdLugar": "aaa123",
        "nombre": "Las Violetas",
        "description": "Confiteria",
        "foto": require('../assets/lasvioletas.jpg'),
        "filtro": "merienda",
    },
    {
        "IdLugar": "bbb456",
        "nombre": "Le Pain Quotidien",
        "description": "Confiteria",
        "foto": require('../assets/Restaurante-ejemplo.jpg'),
        "filtro": "frances",
    },])

    /*const headers = {
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
    }, [])*/


    let [loaded] = useFonts({
        Comfortaa_400Regular,
        ShipporiAntiqueB1_400Regular,
    });

    if (!loaded) {
        return null;
    }
    return (
        <KeyboardAvoidingView style={[{ fontFamily: 'Comfortaa_400Regular' }, styles.pag]} behavior={Platform.OS === "" ? "padding" : "height"}>
            <View>
                <View>
                    <View style={styles.row}>
                        <Text style={[{ fontFamily: 'ShipporiAntiqueB1_400Regular' }, styles.texto]} >Seguidos</Text>
                        <Text style={[{ fontFamily: 'Comfortaa_400Regular' }, styles.texto]}>|</Text>
                        <Text style={[{ fontFamily: 'ShipporiAntiqueB1_400Regular' }, styles.texto]}>Para Ti</Text>
                    </View>
                    <Buscador />
                    <Filtros></Filtros>
                </View>
                <UserContext.Provider value={user}>
                    <ListadoHome lugares={lugares}></ListadoHome>
                </UserContext.Provider>

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
