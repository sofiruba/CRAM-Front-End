import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginForm() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput style={styles.input}
            placeholder="Usuario"
            onChangeText={(text) => props.setUser({ ...user, username: text })}
          />
        </View>
      </View>
      <View>
        <View>

          <TextInput style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => props.setUser({ ...props.user, password: text })}
          />
        </View>
      </View>
      <View style={styles.boton}>
        <Button style={styles.boton} title="Ingresar" color="#DE95DB" onPress={()=> navigation.navigate("Home")} /> 
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
    margin: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '11%',
  },

  imageStyle: {
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  boton: {
    marginTop: 10,
    height:'100%',
    width: '100%',
  },

  input:{
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '5%',
    
  },

});