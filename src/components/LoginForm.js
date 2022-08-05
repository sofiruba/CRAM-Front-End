import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// al escribir en form hay error debido a los props
//* FUENTE: RUBIK
export default function LoginForm() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input}
          placeholder="  Usuario"
          onChangeText={(text) => props.setUser({ ...user, username: text })}
        />
      </View>
      <View>
        <View>

          <TextInput style={styles.input}
            placeholder="  Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => props.setUser({ ...props.user, password: text })}
          />
        </View>
      </View>
      <View style={styles.boton}>
        <Button title="Ingresar" color="#DE95DB" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  formstyle: {
    backgroundColor: 'white',
    marginBottom: 0,
    marginTop: 0,
    flex: 1,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '11%',
    marginTop: '10%',
  },

  imageStyle: {
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  boton: {
    marginTop: '5%',
    height: '100%',
    width: '100%',
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '5%',
    width: 200,
    height: 45,

  },

});
