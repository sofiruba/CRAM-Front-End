import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
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
                <View>
                <View style={styles.texto}>
                    <View style={styles.bigrow}>
                    <Text style={styles.title}> Le Pain Quotidien </Text>
                    <Icon name={'comment'} style={styles.comment} /> 
                    </View>
                    </View>
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
                    <Button title="Ir a home" color="#DE95DB"  style={styles.boton} onPress={() => navigation.goBack()} />
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
        height: '50%',
    },
    img: {
        height: '70%',
        width: '100%',
        marginTop: '2%',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    tinyimg: {
        height: '50%',
        width: '110%',
        marginTop: '5%'
    },
    title: {
        fontSize: 35,
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginTop: '-12%',
        marginLeft: 0,
        textAlign: 'left',
        maxWidth: '99%',
    },
    pag: {
        backgroundColor: "#FFFFFF",
        height: '100%',
        width: '100%',
        padding: '10%',
        fontFamily: 'Poppins',
        
    },
    subtitle: {
        fontWeight: '600',
        fontSize: 25,
        marginLeft: '-5%',
        marginTop: '2%',
    },
    bigrow:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: '8%',
        marginBottom: '2%',
        width: '50%',
        alignItems: 'center',
    },
    descuento: {
        marginTop: '2%',
        marginLeft: '2%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lista: {
        marginTop: '2%',
        marginRight: '3%',
        fontSize: 18,
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
        textAlign: "center",
        fontSize: 30,
        marginLeft: '2%',
        marginTop: '2%',
    },

    boton: {
        height: '10%',
        width: '50%',
        borderRadius: 13,
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    info: {
        fontSize: 18,
        color: 'grey',
        marginLeft: '-4%',
        marginTop: '3%',
    },
    descuentos: {
        height: '65%',
        width: '25%',
        backgroundColor: "#F8F7F7",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    },
    simbolo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    heart: {
        color: 'red',
        marginTop: '3%',
        marginLeft: '2%',
        marginRight: '3%',
    },
})