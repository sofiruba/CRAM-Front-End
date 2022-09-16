import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Rubik_600SemiBold, useFonts  } from "@expo-google-fonts/dev";
//* FUENTE: RUBIK
export default function LoginForm({login}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  let [loaded] = useFonts({
     Rubik_600SemiBold,
    });
    if (!loaded) {
      return null;
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input}
          placeholder="  Usuario"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View>
        <View>
          <TextInput style={styles.input}
            placeholder="  Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
      <View style={[{fontFamily: 'Rubik_600SemiBold'},styles.boton]}>
        <Button title="Ingresar" color="#D7A625" onPress={() => login(username, password)} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  formstyle: {
    backgroundColor: 'white',
    marginTop: 10,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
  },

  imageStyle: {
    alignItems: 'center',
  },
  boton: {
    marginTop: 13,
    height: 100,
    width: 100,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 13,
    width: 200,
    height: 45,
    marginLeft: 3,
  },

});
