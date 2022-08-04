import React from "react"
import { View, Text, StyleSheet, Image, Button } from "react-native"

import { useTailwind } from 'tailwind-rn';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function Card({props}) {
  const tailwind = useTailwind()
  const navigation = useNavigation(); 
  /*const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'), 
  });
  if (!loaded) {
    return null;
  }*/
  return (
    <View >
      <View >
        <Icon name={'heart'}  />
        <Text > {props.nombre}   </Text>
        <View >
          <Text > {props.description}  </Text>
        </View>
        <View>
          <Image source={props.imagen} /> 
        </View>
        <View>
          <Button onPress={()=> navigation.navigate("Profile")} title=" Ver detalle"/>
        </View>
      </View>
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    width: "363px",
    height: "152px",
    backgroundColor: "#F8F7F7",
    boxShadow: "7px 7px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    marginTop: "40px",
    marginHorizontal: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: "100px",
    height: "70px",
    position: "absolute",
    right: "20px",
    bottom: "15px",
  },
  titulo: {
    fontSize: "25px",
    fontWeight: "bold",
    marginLeft: "10px",


  },
  corazon: {
    color: "red",
    textAlign: "right",
    fontSize: '30px',
    marginTop: '15px',
    marginRight: '15px',
  },
  descripcion: {
    fontSize: "15px",
    color: "grey",
    marginLeft: "13px",
  }
});
