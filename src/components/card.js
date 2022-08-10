import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


//* fuentes: para el Le Pain Quotidien va la fuente arvo y para Cafeteria fuente slabo 27px
export default function Card({ props }) {
  const navigation = useNavigation();
  /*const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'), 
  });
  if (!loaded) {
    return null;
  }*/
  let img = `../assets/${props.foto}.png`
  console.log(img)
  return (
    <SafeAreaView onTouchStart={() => navigation.navigate("Profile")} style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <View style={{ width: '65%', }}>
            <Text style={styles.titulo}> {props.nombre}   </Text>
          </View>
          <View style={{ width: '25%', }}>
            <Icon name={'heart'} size={25} style={styles.heart} />
          </View>
        </View>
        <View style={styles.img}>
          <Image style={styles.image} source={props.foto}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>



  );
}


const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: '30%',
    backgroundColor: "#F8F7F7",
    borderRadius: 13,
    marginTop: '10%',
    marginHorizontal: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: '#F8F7F7',
    borderWidth: 1,
  },
  image: {
    height: 100,
    width: '80%',
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: '3%',
    marginLeft: '2%',
  },
  img: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '2%',
  },
  heart: {
    color: "red",
    textAlign: "right",

    marginLeft: '60%',
    marginTop: '20%',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

});
