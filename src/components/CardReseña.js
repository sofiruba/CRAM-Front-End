import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Arvo_400Regular, useFonts } from "@expo-google-fonts/dev";
import Puntaje from "./puntaje";

//* fuentes: para el Le Pain Quotidien va la fuente arvo y para Cafeteria fuente slabo 27px
export default function CardReseña({ props }) {
    const navigation = useNavigation();
    let [loaded] = useFonts({
        Arvo_400Regular,
    });

    if (!loaded) {
        return null;
    }
    console.log(props)

    return (
        <SafeAreaView >
            
            <View style={styles.row}>
                <View style={{ width: 200 }}>
                    <Text style={[{ fontFamily: 'Arvo_400Regular' }, styles.titulo]}>{props.titulo}</Text>
                    <Puntaje puntaje={props.puntaje}></Puntaje>
                </View>

            </View>
            <View>
                    <Text style={[{ fontFamily: 'Arvo_400Regular' }, styles.titulo]}>{props.descripcion}</Text>
                </View>
            <View style={styles.img}>
                <Image style={styles.image} source={props.foto}></Image>
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
        color: "red",
        textAlign: "right",
        marginLeft: 40,
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

});
