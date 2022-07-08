import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, Button, Input, StyleSheet, TouchableOpacity } from 'react-native'

import Buscador from '../components/buscador'
import DrawerNav from '../../navigation/drawer'

import Card from '../components/card'

const lugares = [{
    "IdLugar": "aaa123",
    "nombre": "Las Violetas",
    "description": "Confiteria",
    "foto": "https://media-cdn.tripadvisor.com/media/photo-s/13/94/44/44/the-salon.jpg"
},
{
    "IdLugar": "abc456",
    "nombre": "Ocaña",
    "description": "Bar",
    "foto": "https://images.adsttc.com/media/images/5097/e769/28ba/0d49/f800/040d/large_jpg/Oca%C3%B1a-Barcelona-0042.jpg?1414171405"
},
{
    "IdLugar": "bcd",
    "nombre": "Starbucks",
    "description": "Cafeteria", // falta imagen
    "foto": "https://devotoshopping.neexcdn.com.ar/wp-content/uploads/2017/03/Starbucks-Logo.png"
}]

export default function HomeScreen() {

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
    console.log(lugares)
    return (
        <View style={styles.pag}>

            <Buscador />
            <DrawerNav></DrawerNav>
            {
                lugares.map((l) => {
                    return (
                    <Card props={l} />
                    )
                })
            }

        </View>
    );

}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F5D2F6',
        height: 100,
        width: 100,
    },
})
