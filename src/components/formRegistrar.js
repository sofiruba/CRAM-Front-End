
import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';

//* FUENTE: RUBIK
export default function FormRegistrar({ register }) {
  const [nombre, setNombre] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [mail, setMail] = useState("")




  return (
    <View style={styles.contain}>
      <View style={styles.perfilfoto}>
        <Text style={styles.iconmas}>+</Text>
      </View>
      <View style={styles.container}>
      
      <View style={styles.inputs}>
        <TextInput style={styles.input}
          placeholder="  Nombre"
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput style={styles.input}
          placeholder="  Usuario"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput style={styles.input}
          placeholder="  Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput style={styles.input}
          placeholder="  Mail"
          onChangeText={(text) => setMail(text)}
        />
      </View>
      <View style={styles.boton}>
        <Button title="Registrarse" color="#D7A625" onPress={() => register({ "nombre": nombre, "username": username, "password": password, "mail": mail })} />
      </View>
    </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
  contain:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  perfilfoto: {
    backgroundColor: '#FFFFFF',
    width: 120,
    height: 120,
    borderRadius: 100,

    justifyContent: 'center',
    alignItems: 'center',
},
iconmas: {
    fontSize: 50,
    color: '#CCCCCC',
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
    marginTop: 30,
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
    marginTop: 20,
    height: '100%',
    width: 150,
  },

  input: {
    backgroundColor: '#F8F7F7',
    borderRadius: 20,
    marginTop: 20,
    width: 300,
    height: 50,
  },

});
