import React , {useEffect, useState}from "react"
import { View, Text, StyleSheet, Image, Button } from "react-native"
import { SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Poppins_400Regular, useFonts, Poppins_600SemiBold } from "@expo-google-fonts/dev";

import Puntaje from "./puntaje";
import axios from "axios";

//* fuentes: para el Le Pain Quotidien va la fuente arvo y para Cafeteria fuente slabo 27px
export default function CardReseña({ props }) {
    const navigation = useNavigation();
    const getUser = () => {
        return axios.get('http://localhost:3000/usuarios/'+ props.IdUsuario)
        .then(res => {
             setUsuario(res.data)
        })
        .catch((err) => console.log(err))

    }
    useEffect(() => {
        getUser()
    }, [])
    const [usuario, setUsuario] = useState({})
    let [loaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        
    });
    if (!loaded) {
        return null;
    }
    

    return (
        <SafeAreaView style={[styles.container, styles.shadow]}>
            <View style={styles.row}>
                <View style={{ width: 180, marginLeft: 5 }}>
                    <Text style={[{ fontFamily: 'Poppins_400Regular' }, styles.titulo]}>{props.titulo}</Text>
                    <Text>{usuario.nombre}</Text>
                    <Puntaje puntaje={props.puntaje}></Puntaje>
                    <Text style={[{ fontFamily: 'Poppins_400Regular' }, styles.descripcion]}>{props.descripcion}</Text>
                    
                </View>
                <Image style={styles.image} source={{ uri: props.foto }}></Image>
            </View>

            <View style={styles.row}>
                <Text style={[{ fontFamily: 'Poppins_600SemiBold' },styles.boton]}>A favor</Text>
                <Text style={[{fontFamily:  'Poppins_600SemiBold'},styles.boton]}>En contra</Text>
            </View>
            <View style={styles.img}>

            </View>
        </SafeAreaView>



    );
}


const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 170,
        backgroundColor: "#fff",
        borderRadius: 13,
        marginTop: 20,
        borderColor: '#F8F7F7',
        borderWidth: 1,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        elevation: 2,
    },
    image: {
        height: 100,
        width: 100,
        marginTop: 5
    },
    titulo: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 5,
    },
    img: {
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '2%',
    },

    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    boton: {
        backgroundColor: 'rgba(71, 71, 71, 0.08)',
        marginLeft: 8,
        marginTop: 15,
        fontSize: 10,
        shadowColor: 'rgba(71, 71, 71, 0.1)',
        shadowOpacity: 0.05,
        elevation: 0.5,
        borderRadius: 5
    },
    descripcion:{
        fontSize: 15,
        color:'#888888',
        marginLeft: 5,
    }
});
