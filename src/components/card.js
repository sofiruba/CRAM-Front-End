import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

import { useTailwind } from 'tailwind-rn';

import Icon from 'react-native-vector-icons/FontAwesome';


export default function Card(props) {
  const tailwind = useTailwind()
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'), 
  });
  if (!loaded) {
    return null;
  }
  return (
    <View >
      <View style={[styles.container, tailwind("flex items-center")]}>
        <Icon name={'heart'} style={styles.corazon} />
        <Text style={styles.titulo}> {props.nombre}   </Text>
        <View style={{ marginTop: '3px' }}>
          <Text style={styles.descripcion}> {props.description}  </Text>
        </View>
        <Text>
          <Image style={styles.image} source={props.imagen} />
        </Text>
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
