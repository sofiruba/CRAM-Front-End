import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import Card from "./card";
import { useTailwind } from 'tailwind-rn';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CardF() {
  const tailwind = useTailwind();
  // elegir fonts
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'), 
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <View style={[styles.container, tailwind("flex items-center")]}>
        <Icon name={'heart'} style={styles.corazon} />
        <Text style={Card.card}> Le Pain Quotidien   </Text>
        <View style={{ marginTop: '3px' }}>
          <Text style={[styles.descripcion, {fontFamily: 'Montserrat'}]}> Cafeteria  </Text>
        </View>
        <Text>
          <Image style={styles.image} source={{ uri: "http://a.mktgcdn.com/p/-55WSHHf7rFgzRzrSakV5dsI5Xd80qnW2Di3ZcwY5Kw/1280x720.jpg" }} />
        </Text>
      </View>
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    width: 363,
    height: 152,
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
  },
  container2: {
    position: "absolute",
    width: "439px",
    height: "579px",
    left: "0px",
    top: "319px",
    background: "rgba(237, 243, 237, 0.89)",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    bordeRadius: "50px",
  }
});
