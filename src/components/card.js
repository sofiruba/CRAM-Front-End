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
          <Image style={styles.image} source={props.imagen} /> 
        </View>
        <View>
          <Button color="#DE95DB" onPress={()=> navigation.navigate("Profile")} title=" Ver detalle"/>
        </View>
      </View>
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    width: 363,
    height: 152,
    backgroundColor: "#F8F7F7",
    borderRadius: 15,
    marginTop: 40,
    marginHorizontal: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: '100%',
    height: 70,
    position: "absolute",
    right: 20,
    bottom: 15,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,


  },
  corazon: {
    color: "red",
    textAlign: "right",
    fontSize: 30,
    marginTop: 15,
    marginRight: 15,
  },
  descripcion: {
    fontSize: 15,
    color: "grey",
    marginLeft: 13,
  }
});
