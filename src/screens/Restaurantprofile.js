import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
// prob para la parte de ig podemos poner un botón que se abre?
export default function Profile() {

    const navigation = useNavigation();
    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Bold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.pag}>
            <View>
                <View style={styles.content}>
                <Image style={styles.img} source={require('../assets/Restaurante-ejemplo.jpg')} />

                </View>
                <View style={styles.infores}>
                    <Text style={styles.title}> Le Pain Quotidien <Icon name={'comment'} style={styles.comment} /> </Text>
                    <Text style={styles.subtitle}>Confiteria</Text>
                    <Text style={styles.info}>Info...</Text>
                </View>
                <View style={styles.bigrow}>
                    <View style={styles.row}>
                        <View style={styles.descuentos}>
                            <Text style={styles.simbolo}>%</Text>
                        </View>
                        <Text style={styles.descuento}>Descuentos disponibles</Text>

                    </View>
                    <View style={styles.row}>
                        <Icon name={'heart'} size={35} style={styles.heart} />
                        <Text style={styles.lista}>Añadir a Lista</Text>
                    </View>
                    <Image style={styles.tinyimg} source={require('../assets/mapaejemplo.png')}></Image>
                </View>
                <View style={styles.boton}>
                    <Button title="Ir a home" color="#D7A625"  style={styles.boton} onPress={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 300,
    },
    img: {
        height: 150,
        width: '100%',
        marginTop: 10,
        justifyContent: 'center',
        resizeMode: 'contain',
        position: 'relative',
    },
    tinyimg: {
        height: 130,
        width: '100%',
        marginTop: 7,
    },
    title: {
        fontSize: 35,
        textAlign: 'justify',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginTop: 0,
        marginLeft: 0,
        textAlign: 'left',
    },
    pag: {
        backgroundColor: "#FFFFFF",
        height: '100%',
        width: '100%',
        padding: 30,
        fontFamily: 'Poppins',
        
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 25,
        marginLeft: 0,
        marginTop: 5,
    },
    bigrow:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 15,
        marginBottom: 5,
        width: 150,
        height: 60,
        alignItems: 'center',
    },
    descuento: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    lista: {
        marginTop: 0,
        marginRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    comment:
    {
        color: "black",
        textAlign: "right",
        fontSize: 30,
        marginLeft: 0,
        marginTop: 0,
    },

    boton: {
        height: 50,
        width: 130,
        borderRadius: 13,
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    info: {
        fontSize: 18,
        color: 'grey',
        marginLeft: 0,
        marginTop: 5,
    },
    descuentos: {
        height: 50,
        width: 30,
        backgroundColor: "#F8F7F7",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    simbolo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    heart: {
        color: 'red',
        marginTop: 0,
        marginLeft: 2,
        marginRight: 0,
    },
})