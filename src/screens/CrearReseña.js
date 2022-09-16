import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView } from 'react-native'
import { DaysOne_400Regular, Comfortaa_Regular, ShipporiAntiqueB1_400Regular, useFonts, Arvo_400Regular, Comfortaa_300Light } from '@expo-google-fonts/dev'
import FormPuntaje from '../components/formPuntaje'


//* Fuentes: DaysOne,Comfortaa y para el seguidos y para ti Shippori Antique B1

export default function CrearReseña(props) {

  const [titulo, setTitulo] = useState('')
  const [destacar, setDestacar] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [puntaje, setPuntaje] = useState(0)

  const [password, setPassword] = useState('')
  const usuario = props.route.params.usuario
  const lugar  = props.route.params.restaurante

  /*const crearReseña = () => {
    let reseña = {
      "titulo": titulo, 
      "destacar": destacar,
      "descripcion": descripcion,
      "puntaje": puntaje,
      "IdUsuario": user.IdUsuario,
      "IdLugar": lugar.IdLugar, 
      "foto": ""

    }
    return axios.post('htps://localhost:3000/reviews', reseña)
      .then(res => {
        if (res.status = 201) {
          navigation.navigate('Home')
        }
        else {
          console.log(res.message)
        }
      })
      .catch(error => {
        console.error('error', error)
      })
  }*/


  let [loaded] = useFonts({
    Arvo_400Regular,
    ShipporiAntiqueB1_400Regular,
    DaysOne_400Regular,
    Comfortaa_300Light,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={[{ fontFamily: 'Comfortaa_300Light' }, styles.pag]}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Crear Reseña</Text>
      </View>
      <View style={[{ fontfamily: 'Comfortaa_300Light' }, styles.container]}>
        <Text style={styles.titulo}>Seleccione el puntaje</Text>
        <FormPuntaje props={{ puntaje, setPuntaje }} ></FormPuntaje>
        <View>
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder="Titulo"
            onChangeText={(text) => setTitulo(text)}
          />
        </View>
        <View>
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder="¿Algo que llamo la atencion?"
            onChangeText={(text) => setDestacar(text)}
          />
        </View>
        <View>
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder="Descripcion"
            onChangeText={(text) => setDescripcion(text)}

          />
        </View>
        <View style={[{ fontFamily: 'Comfortaa_300Light' }, styles.boton]}>
          <Button title="Enviar"
           onPress={() => crearReseña()}
            color="#D7A625" />
        </View>

      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    marginTop: 10,
  },
  pag: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 13,
    width: 200,
    height: 45,
    marginLeft: 3,
  },

  texto: {
    fontSize: 18,
    marginLeft: '2%',
    marginRight: '2%'
  }
})
