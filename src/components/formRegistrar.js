
import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import SubirFoto from "./SubirFoto";

//* FUENTE: RUBIK
export default function FormRegistrar({ register }) {
  const [nombre, setNombre] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [mail, setMail] = useState("")
  const [foto, setFoto] = useState(null)
  return (
    <View style={styles.contain}>
      <View>
        <SubirFoto props={{ foto, setFoto, styles }} ></SubirFoto>
      </View>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput style={[styles.input, styles.shadow]}
            placeholder="  Nombre"
            onChangeText={(text) => setNombre(text)}
          />
          <TextInput style={[styles.input, styles.shadow]}
            placeholder="  Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput style={[styles.input, styles.shadow]}
            placeholder=" Nombre de Usuario"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput style={[styles.input, styles.shadow]}
            placeholder="  Mail"
            onChangeText={(text) => setMail(text)}
          />
        </View>
        <View style={[styles.boton, styles.shadow]}>
          <Text style={styles.btn} onPress={() => register({ "nombre": nombre, "username": username, "password": password, "mail": mail })} >Registrarse</Text>
        </View>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7D250',
    marginTop: 130,
  },
  formstyle: {
    backgroundColor: 'white',
    marginBottom: 0,
    marginTop: 0,
    flex: 1,
  },
  inputs: {
    marginTop: 35,
  },
  container: {
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
    height: 700,
    width: '100%',
    backgroundColor: "#FFF",
    borderRadius: 60,
  },
  imageStyle: {
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  boton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    backgroundColor: "#F4B980",
    marginTop: 30,
    borderRadius: 40,

  },
  input: {
    backgroundColor: '#F8F7F7',
    borderRadius: 10,
    marginTop: 20,
    width: 300,
    height: 60,

  },
  shadow: {
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    elevation: 10,
  },
  foto: {
    backgroundColor: '#fff',
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  mas: {
    fontSize: 50,
    fontWeight: '600',
    color: '#9C9C9C',
  },
  btn: {
    color: '#fff'

  }

});
