import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { tailwind } from "react-native-tailwindcss";
import { useTailwind } from 'tailwind-rn';
import TailwindProvider from "tailwind-rn";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CardF() {
    const tailwind = useTailwind();
    return (
        <View > 
   
          <View style={[styles.container, tailwind("flex items-center")]}>
          <Icon name={'heart'} style={styles.corazon}/>
          <Text style={styles.titulo}> Le Pain Quotidien   </Text>
            <View style={{marginTop: '3px'}}>
      
          <Text style={styles.descripcion}> Le Pain Quotidien es una cadena   </Text>
          <Text style={styles.descripcion}> internacional de panaderías-   </Text>
            <Text style={styles.descripcion}> restaurantes.   </Text>
          </View>
           <Text>
             <Image  style={styles.image} source={{uri: "http://a.mktgcdn.com/p/-55WSHHf7rFgzRzrSakV5dsI5Xd80qnW2Di3ZcwY5Kw/1280x720.jpg"}}/>
             </Text>
          </View>
          <View style={[styles.container, tailwind("flex items-center")]}>
          <Icon name={'heart'} style={styles.corazon}/>
          <Text style={styles.titulo}> McDonald's   </Text>
            <View style={{marginTop: '3px'}}>
          <Text style={styles.descripcion}> McDonald's es una franquicia    </Text>
          <Text style={styles.descripcion}> de restaurantes de comida rápida   </Text>
            <Text style={styles.descripcion}> estadounidense.  </Text>
          </View>
           <Text>
             <Image  style={styles.image} source={{uri: "https://i.blogs.es/3c815c/thabang-mrx9wqk4w7a-unsplash/840_560.jpeg"}}/>
             </Text>
          </View>
          <View style={[styles.container, tailwind("flex items-center")]}>
          <Icon name={'heart'} style={styles.corazon}/>
          <Text style={styles.titulo}> KFC   </Text>
            <View style={{marginTop: '3px'}}>
          <Text style={styles.descripcion}> Kentucky Fried Chicken   </Text>
            <Text style={styles.descripcion}> es una cadena de restaurantes de   </Text>
            <Text style={styles.descripcion}> comida rápida estadounidense.  </Text>
          </View>
           <Text>
             <Image  style={styles.image} source={{uri: "https://image.shutterstock.com/image-photo/kfc-fast-food-restaurant-kentucky-260nw-1608294979.jpg"}}/>
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
  titulo:{
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
