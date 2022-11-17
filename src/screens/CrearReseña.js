import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView } from 'react-native'
import { DaysOne_400Regular, Comfortaa_Regular, ShipporiAntiqueB1_400Regular, useFonts, Arvo_400Regular, Comfortaa_300Light } from '@expo-google-fonts/dev'
import FormPuntaje from '../components/formPuntaje'
import SubirFoto from '../components/SubirFoto'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

//* Fuentes: DaysOne,Comfortaa y para el seguidos y para ti Shippori Antique B1

export default function CrearReseña(props) {
  const navigation = useNavigation()
  const [titulo, setTitulo] = useState('')
  const [destacar, setDestacar] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [puntaje, setPuntaje] = useState(0)
  const [foto, setFoto] = useState(null)
  const usuario = props.route.params.usuario
  const lugar = props.route.params.restaurante

  const crearReseña = (e) => {
    let reseña = {
      "titulo": titulo, 
      "destacar": destacar,
      "descripcion": descripcion,
      "puntaje": puntaje,
      "IdUsuario": usuario.IdUsuario,
      "IdLugar": lugar.IdLugar, 
      "foto": foto

    }
    e.preventDefault()
    return axios.post('http://localhost:3000/reviews', reseña)
      .then(res => {
        if (res.status = 201) {
          
          navigation.goBack()
        }
        else {
          console.log(res.message)
        }
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  console.log(lugar)
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
    <View style={ styles.pag}>
       <Icon style={styles.arrow} name="arrow-left" size={20} onPress={() => navigation.goBack()} ></Icon>
      <View style={styles.container}>
        <Text style={[{ fontFamily: 'Comfortaa_300Light' },styles.title]}>{lugar.nombre}</Text>
        <View style={ styles.container}>
          <SubirFoto props={{ foto, setFoto, styles }}></SubirFoto>
          <View style={styles.cont}>
            <Text style={[{ fontFamily: 'Comfortaa_300Light' },styles.titulo]}>Seleccione el puntaje</Text>
            <FormPuntaje props={{ puntaje, setPuntaje }} ></FormPuntaje>
          </View>

          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder=" Titulo"
            onChangeText={(text) => setTitulo(text)}
          />
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder=" ¿Algo que llamo la atencion?"
            onChangeText={(text) => setDestacar(text)}
          />
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light'}, styles.inputD]}
            placeholder=" Descripcion"
            placeholderStyle={{marginTop: 60}}
            onChangeText={(text) => setDescripcion(text)}

          />

          <View style={ styles.boton} onTouchStart={(e)=>crearReseña(e)}>
          <Text style={styles.btn}  >Enviar</Text>
          </View>
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
  },
  pag: {
    backgroundColor: '#F4F1F1',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 13,
    width: 300,
    height: 45,
    marginLeft: 3,
    shadowColor: '#000',
    elevation: 5,
    shadowOpacity: 0.2,
  },
  inputD: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 13,
    width: 300,
    height: 150,
    marginLeft: 3,
    shadowColor: '#000',
    elevation: 5,
    shadowOpacity: 0.2,
  },

  foto:{
    width: 300,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
  },
  mas:{
    color: 'rgba(255,255,255,0.8)',
    fontSize: 80,
    fontWeight: '100'
  },
  boton: { 
    marginTop: 20,
    height: 60,
    width: 300,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0B57D",
    fontWeight:'bold',
    marginBottom: 40,
  },
  title:{
    fontSize: 40,
  },
  titulo: {
    fontSize: 15,
    marginTop: 10
  },
  cont:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',


  },
  arrow: {
    marginLeft: 20,
    marginTop: 30,
},
})
