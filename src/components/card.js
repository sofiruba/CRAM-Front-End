import React from "react"
import { View, Text, StyleSheet, Image, Button } from "react-native"

import { useTailwind } from 'tailwind-rn';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";


//* fuentes: para el Le Pain Quotidien va la fuente arvo y para Cafeteria fuente slabo 27px
export default function Card({ props }) {
  const tailwind = useTailwind()
  const navigation = useNavigation();
  /*const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'), 
  });
  if (!loaded) {
    return null;
  }*/
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ width: '65%', }}>
          <Text style={styles.titulo}> {props.nombre}   </Text>
        </View>
        <View style={{ width: '25%', }}>
          <Icon name={'heart'} style={styles.heart} />
        </View>
      </View>
      <View>
        <Image style={styles.image} source={props.imagen} />
      </View>
      <View style={styles.boton}>
        <Button onPress={() => navigation.navigate("Profile")} color="#DE95DB" title="Ver detalle" />

      </View>
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: '13%',
    backgroundColor: "#F8F7F7",
    borderRadius: 13,
    marginTop: 40,
    marginHorizontal: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: '#F8F7F7',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 70,
    position: "absolute",
    right: 20,
    bottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: '3%',
    marginLeft: '2%',
  },
  heart: {
    color: "red",
    textAlign: "right",
    fontSize: 20,
    marginLeft: '60%',
    marginTop: '20%',
  },

  boton: {
    width: '40%',
    marginLeft: '2%',
    height: '60%',
    marginTop: '5%',

  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  verdetalle: {
    marginTop: '15%',
    marginLeft: '5%',
  },
});
