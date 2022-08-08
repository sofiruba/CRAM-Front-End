import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
export default function Profile() {

    const navigation = useNavigation();
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Poppins-Bold.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.pag}>
            <View>
                <Image style={styles.img} source={require('../assets/Restaurante-ejemplo.jpg')} />
                <View>
                    <Text style={styles.title}> Le Pain Quotidien <Icon name={'comment'} style={styles.comment} /> </Text>
                    <Text style={styles.subtitle}>Confiteria</Text>
                    <Text style={styles.info}>Info...</Text>
                </View>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <View style={styles.descuentos}>
                            <Text style={styles.simbolo}>%</Text>
                        </View>
                        <Text style={styles.descuento}>Descuentos disponibles</Text>


                    </View>
                    <View style={styles.row}>
                        <Icon name={'heart'} size={35} style={styles.heart} />
                        <Text style={styles.descuento}>Añadir a Lista</Text>

                    </View>
                </View>
                <View style={styles.boton}>
                    <Button title="Ir a home" color="#DE95DB" onPress={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    img: {
        height: '38%',
        width: '100%',
        marginTop: '1%',
        justifyContent: 'center',
        resizeMode: 'contain',
        position: 'relative'
    },
    tinyimg: {
        height: '200%',
        width: '50%',
        marginLeft: '70%',
        marginTop: '-21%'
    },
    title: {
        fontSize: 37,
        textAlign: 'justify',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginTop: '-15%',
    },
    pag: {
        backgroundColor: "#FFFFFF",
        height: '100%',
        width: '100%',
        padding: '8%',
        flex: 1,
        flexDirection: 'column',
        position: 'relative',
        fontFamily: 'Poppins',

    },
    subtitle: {
        fontWeight: '600',
        fontSize: 25,
        marginLeft: '2%',
        marginTop: '2%',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: '2%',
        marginBottom: '2%',
    },
    descuento: {
        marginTop: '1%',
        marginLeft: '2%',
        fontSize: 31,
        fontWeight: 'bold',
    },
    lista: {
        marginRight: '10%',
        marginTop: '2%',
        fontSize: 20,
        fontWeight: 'bold',

    },
    column: {
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: '15%',
        marginBottom: '9%',
    },
    comment:
    {
        color: "black",
        textAlign: "right",
        fontSize: 30,
        marginLeft: '2%',
        marginTop: '2%',
    },

    boton: {
        height: '10%',
        width: '40%',
        borderRadius: 13,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    info: {
        fontSize: 18,
        color: 'grey',
        marginLeft: '3%',
        marginTop: '1%',
    },
    descuentos: {
        height: '40%',
        width: '13%',
        backgroundColor: "#F8F7F7",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    },
    simbolo: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    heart: {
        color: 'red',
        height: '150%',
        marginLeft: '2%',
    },
})