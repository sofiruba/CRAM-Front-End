import React, { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { Arvo_400Regular, useFonts } from "@expo-google-fonts/dev";

//* fuentes: para el Le Pain Quotidien va la fuente arvo y para Cafeteria fuente slabo 27px
export default function Card({ props }) {
  const navigation = useNavigation();
  const [liked, like] = useState(false)
  let [loaded] = useFonts({
      Arvo_400Regular,
    });
  
  if (!loaded) {
      return null;
  }
 
  return (
    <SafeAreaView  style={styles.container}>
      
        <View style={styles.row}>
          <View style={{ width: 200 }}>
            <Text style={[{fontFamily:'Arvo_400Regular'},styles.titulo]}> {props.lugar.nombre}   </Text>
          </View>
          <View style={{ width: 70 }}>
            {
              liked ? <Icon name='heart' size={25} style={styles.heart} color='red' onPress={() => like(!liked)} /> : <Icon name='heart' style={styles.heart} size={25} color='#c4c4c4c4' onPress={()=> like(!liked) }/>
            }

          </View>
        </View>
        <View style={styles.img} onTouchStart={() => navigation.navigate("Profile", {props})}>
          <Image style={styles.image} source={props.lugar.foto}></Image>
        </View>

    </SafeAreaView>



  );
}


const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 170,
    backgroundColor: "#F8F7F7",
    borderRadius: 13,
    marginTop: 30,
    marginHorizontal: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: '#F8F7F7',
    borderWidth: 1,
  },
  image: {
    height: 100,
    width: 250,
  },
  titulo: {
    fontSize: 20,
    marginTop: '3%',
    marginLeft: '2%',
  },
  img: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '2%',
  },
  heart: {
    textAlign: "right",
    marginLeft: 40,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

});
