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
      <View style={[{fontFamily: 'Rubik_600SemiBold'},styles.boton]} onTouchStart={() => login(username, password)} >
        <Text  style={{color: '#fff'}}  >Iniciar</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  imageStyle: {
    alignItems: 'center',
  },
  boton: { 
    marginTop: 20,
    height: 60,
    width: 300,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7A625',
    marginBottom: 40,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    width: 300,
    height: 60,
    marginLeft: 3,
  },

});
