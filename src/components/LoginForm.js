import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginForm() {
  const navigation = useNavigation(); 
  return (
    <View >
      <View >
        <View >
          <TextInput
            placeholder="Usuario"
            onChangeText={(text) => props.setUser({ ...user, username: text })}
          />
        </View>
      </View>
      <View >
        <View >

          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => props.setUser({ ...props.user, password: text })}
          />
        </View>
      </View>
      <View >
        <Button title="Ingresar" color="#DE95DB" onPress={()=> navigation.navigate("Home")} /> 
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
  margin: {
    margin: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  boton: {
    marginTop: 20,
    width: 100
  }

});