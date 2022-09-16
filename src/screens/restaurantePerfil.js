import { View, Text, Button, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, React } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Poppins_700Bold, Heebo_400Regular, FrankRuhlLibre_700Bold, Arimo_700Bold, useFonts, Comfortaa_400Regular } from '@expo-google-fonts/dev';
// en abierto o cerrado hay que poner un if en styles que se hace con ? supongo que podemos hacer un bool
// https://directory.vercel.app/
// import {el tipo de fuente que quieren}    
// Para Le Pain Quotidien fuente POPPINS,para Confiteria y Descuentos disponibles HEEBO , para agregar lista LIBRE FRANKLIN y para mas informacion ARIMO
export default function Profile(props) {

    const navigation = useNavigation();
    let [loaded] = useFonts({
        Poppins_700Bold,
        Heebo_400Regular,
        FrankRuhlLibre_700Bold,
        Arimo_700Bold,
    });

    if (!loaded) {
        return null;
    }
    const lugar = props.route.params.props.lugar

    return (
        <SafeAreaView style={styles.pag} >
            <ScrollView style={styles.content}>
                <View >
                <View >
                    <Image style={styles.img} source={lugar.foto}></Image>
                    <View>
                        <View style={styles.bigrow}>
                            <Text style={[{ fontFamily: 'Comfortaa_400Regular' }, styles.title]}>{lugar.nombre}</Text>
                            <Icon name={'comment'} style={styles.comment} onPress={() => navigation.navigate("Reseñas", { props })} />
                        </View>

                        <Text style={[{ fontFamily: 'Comfortaa_400Regular' }, styles.subtitle]}>{lugar.description}</Text>
                        <View style={styles.bigrow}>
                            <Icon name={'clock-o'} style={styles.estado} />
                            <Text style={[{ fontFamily: 'Arimo_700Bold' }, styles.estado]}>Abierto</Text>
                            <Text style={[{ fontFamily: 'Arimo_700Bold' }, styles.hora]}> Cierra a las 20hs</Text>
                        </View>
                    </View>
                    <View style={styles.bigrow}>
                        <View style={styles.row}>
                            <View >
                                <Icon name={'phone'} style={styles.llamada} />
                            </View>
                            <Text style={[{ fontFamily: 'FrankRuhlLibre_700Bold' }, styles.llamadatext]}>Llamar</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name={'heart'} size={35} style={styles.heart} />
                            <Text style={[{ fontFamily: 'FrankRuhlLibre_700Bold' }, styles.lista]}>Añadir a Lista</Text>
                        </View>
                        <Image style={styles.tinyimg} source={require('../assets/mapaejemplo.png')}></Image>
                    </View>
                    <View>
                        <Text onPress={() => navigation.goBack()} style={[{ fontFamily: 'Heebo_400Regular' }, styles.boton]}> Ir a Home </Text>
                    </View>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 600,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 5,

    },
    img: {
        height: 285,
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    tinyimg: {
        height: 130,
        width: '100%',
        marginTop: 7,
    },
    title: {
        fontSize: 35,
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 0,
        fontWeight: '900',
        height: 50,
        width: '80%',
    },
    pag: {
        backgroundColor: "#FFF",
        height: '100%',
        width: '100%',
        padding: 10,

        marginTop: 50,

    },
    subtitle: {
        fontWeight: '600',
        fontSize: 22,
        marginLeft: 0,
        marginTop: 0,
    },
    bigrow: {
        flexDirection: "row",
        flexWrap: "wrap",

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 15,
        marginBottom: 5,
        width: 180,
        height: 60,
        alignItems: 'center',
        alignContent: 'center',

    },
    llamadatext: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 18,
        textAlignVertical: 'bottom',
    },
    lista: {
        textAlignVertical: 'bottom',
        fontSize: 18,
    },
    comment:
    {
        color: "black",
        textAlign: "right",
        alignContent: 'flex-end',
        fontSize: 30,

        marginTop: 15,
    },

    boton: {
        height: 50,
        width: 170,
        borderRadius: 13,
        backgroundColor: "#F0B57D",
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 10,
        color: 'white',
    },
    estado: {
        fontSize: 20,
        color: 'green',
        marginLeft: 0,
        marginRight: 5,
        marginTop: 0,
        opacity: 0.8,
        textAlignVertical: 'center',
    },
    hora: {
        fontSize: 18,
        textAlignVertical: 'center',
    },
    llamada: {
        height: 45,
        fontSize: 25,
        width: 35,
        backgroundColor: "#F8F7F7",
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginTop: 10,
        borderRadius: 5,
        textAlign: 'center',
        marginLeft: 5,
    },
    simbolo: {
        fontSize: 25,
    },
    heart: {
        color: 'red',
        textAlignVertical: 'center',
        marginTop: 0,
        marginLeft: 2,
        marginRight: 2.5,
    },
})