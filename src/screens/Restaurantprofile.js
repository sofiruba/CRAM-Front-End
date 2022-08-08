import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.pag}>
            <View>
                <Image style={styles.img} source={require('../assets/Restaurante-ejemplo.jpg')} />
                <View>
                    <Text style={styles.title}> Le Pain Quotidien <Icon name={'comment'} style={styles.comment} /> </Text>
                    <Text style={styles.subtitle}>Confiteria</Text>
                    <Text style={styles.info}>Info...</Text>
                </View>
                <View>
                    <View style={styles.row}>
                        <View style={styles.descuentos}>
                            <Text style={styles.simbolo}>%</Text>
                        </View>
                        <Text style={styles.descuento}>Descuentos disponibles</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name={'heart'} size={35}style={styles.heart} />


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
        height: '50%',
        width: '50%',
        marginLeft: '130%',
    },
    title: {
        fontSize: 28,
        textAlign: 'justify',
        fontWeight: 'bold',
    },
    pag: {
        backgroundColor: "#FFFFFF",
        height: '100%',
        width: '100%',
        padding: '8%',
        flex: 1,
        flexDirection: 'column',
        position: 'relative',

    },
    subtitle: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: '2%',
        marginTop: '2%',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    descuento: {
        marginTop: '7%',
        marginLeft: '2%',
        fontSize: 32,
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
        marginTop: '1%',
        marginBottom: '8%',
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
        height: '50%',
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
    heart:{
        color: 'red',
        height: '150%',
        marginLeft: '2%',
    }
})