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
    

    useEffect(() => {
        getLugares()
    }, [])

    const getLugares = () => {
        const axiosBuscar = axios.create({
            baseURL: 'http://localhost:3000'
            
        })
        return axiosBuscar.get('/Lugares') 
            .then(res => {
                setLugares([res.data]) // returnea un array para hacer el map, si no funciona hacerlo separado por titulo, foto, etc?
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.pag}>

            <Buscador />

            {
                lugares.map((item) => {
                    <Card props={item} />
                })
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
