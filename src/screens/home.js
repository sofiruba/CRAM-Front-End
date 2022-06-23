import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, Button, Input, StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Card from '../components/card'
import Buscador from '../components/buscador'
import Appz from '../components/navbar'


export default function HomeScreen() {

    const [lugares, setLugares] = useState([])

    useEffect(() => {
        getLugares()
    }, [])

    const getLugares = () => {
        axios.get('http://localhost:3000/Lugares')
            .then(res => {
                setLugares(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.pag}>
            <Buscador />
            {lugares.map((item) => {
                <Card props={item} ></Card>
            })}
        </View>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F6D250',
        height: '100%',
        width: '100%',
    },
})