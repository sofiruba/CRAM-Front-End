import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, Button, Input, StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Card from '../components/card'
import Buscador from '../components/buscador'
import DrawerNav from '../../navigation/drawer'
import CardF from '../components/cardf'


export default function HomeScreen() {

    const [lugares, setLugares] = useState([])
    const item = [{
        titulo : "Ocaña",
        descripcion : "Lugar de playa",
        imagen: "https://www.viajes-turisticos.com/wp-content/uploads/2019/01/viajes-turisticos-los-cabos-de-las-flores-y-los-cabos-de-las-flores-1.jpg"
    },
    {
    titulo: "Cancun",
    descripcion: "hoteles",
    imagen: "https://www.viajes-turisticos.com/wp-content/uploads/2019/01/viajes-turisticos-los-cabos-de-las-flores-y-los-cabos-de-las-flores-1.jpg"}   

]

    useEffect(() => {
        getLugares()
    }, [])

    const getLugares = () => {
        const axiosBuscar = axios.create({
            baseURL: 'http://localhost:3000'
        })
        axios.get('/Lugares')
            .then(res => {
                setLugares(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.pag}> 
            <Buscador/>
            <CardF></CardF>
            {//props.map((item) => {<Card props={item}/>})
            }
              
            
        
        </View>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F5D2F6',
        height: '100%',
        width: '100%',
    },
})