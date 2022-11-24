import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView } from 'react-native'
import { DaysOne_400Regular, Comfortaa_Regular, ShipporiAntiqueB1_400Regular, useFonts, Arvo_400Regular, Comfortaa_300Light } from '@expo-google-fonts/dev'
import FormPuntaje from '../components/formPuntaje'
import SubirFoto from '../components/SubirFoto'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

//* Fuentes: DaysOne,Comfortaa y para el seguidos y para ti Shippori Antique B1

export default function AgregarRestaurante() {
  const navigation = useNavigation()
  const [nombre, setNombre] = useState('')
  const [destacar, setDestacar] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [puntaje, setPuntaje] = useState(0)
  const [foto, setFoto] = useState(null)
  
  return (
    <View style={ styles.pag}>
       <Icon style={styles.arrow} name="arrow-left" size={20} onPress={() => navigation.goBack()} ></Icon>
      <View style={styles.container}>
        <View style={ styles.container}>
          <SubirFoto props={{ foto, setFoto, styles }}></SubirFoto>

          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder=" Nombre del restaurante"
            onChangeText={(text) => setNombre(text)}
          />
         
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light' }, styles.input]}
            placeholder="¿Esta abierto o cerrado?"
            onChangeText={(text) => setDestacar(text)}
          />
          
          <TextInput style={[{ fontFamily: 'Comfortaa_300Light'}, styles.inputD]}
            placeholder=" Descripcion"
            placeholderStyle={{marginTop: 60}}
            onChangeText={(text) => setDescripcion(text)}

          />

          <View style={ styles.boton} onTouchStart={(e)=>agregarRestaurante(e)}>
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
  nombre: {
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
