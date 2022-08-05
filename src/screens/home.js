import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet } from 'react-native'
import ListadoHome from '../components/ListadoHome'


//* Fuentes: Arvo , slabo27 px y para el seguidos y para ti Shippori Antique B1


export default function HomeScreen({ navigation }) {

    const lugares = [{
        "IdLugar": "aaa123",
        "nombre": "Las Violetas",
        "description": "Confiteria",
        "foto": { uri: '../assets/icon.png' }
    },
    {
        "IdLugar": "abc456",
        "nombre": "Ocaña",
        "description": "Bar",
        "foto": { uri: '../assets/icon.png' }
    },
    {
        "IdLugar": "bcd",
        "nombre": "Starbucks",
        "description": "Cafeteria",
        "foto": { uri: '../assets/icon.png' }
    }]


    /*  const [lugares, setLugares] = useState([{
          "IdLugar": "aaa123",
          "nombre": "Las Violetas",
          "description": "Confiteria"
        },
        {
          "IdLugar": "abc456",
          "nombre": "Ocaña",
          "description": "Bar"
        },
        {
          "IdLugar": "bcd",
          "nombre": "Starbucks",
          "description": "Cafeteria" // falta imagen
        }])
  <<
  
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
      } */

    return (
        <View style={styles.pag}>
            <View style={styles.row}>
                <Text onPress={() => navigation.navigate('Seguidos')}>Seguidos</Text>
                <Text onPress={() => navigation.navigate('ParaTi')}> Para Ti </Text>
            </View>
            <ListadoHome lugares={lugares}></ListadoHome>

        </View>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F5D2F6',
        height: '100%',
        width: '100%',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        marginTop: '5%',
    },
})
