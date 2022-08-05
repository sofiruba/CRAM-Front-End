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
                <View style={styles.row}>
                    <Text style={styles.title}> Le Pain Quotidien </Text>
                    <Icon name={'comment'} style={styles.comment} />
                </View>
                <View >
                    <Text style={styles.subtitle}>Confiteria</Text>
                    <Text style={styles.parrafo}></Text>
                </View>
                <View>
                    <View style={styles.column}>
                        <Text style={styles.elements}>Descuentos disponibles</Text>
                        <Text style={styles.elements}>Agregar a lista</Text>
                    </View>
                </View>
                <View>
                    <Button title="Ir a home" color="#DE95DB" onPress={() => navigation.goBack()} />
                </View>
            </View>



        </View>
    );

}

const styles = StyleSheet.create({
    img: {
        height: 300,
        width: 300,
        marginTop: '10%',
        justifyContent: 'center',
        resizeMode: 'contain',
        position: 'relative'
    },
    tinyimg: {
        height: '100%',
        width: '100%',
        justifyContent: 'left',
    },
    title: {
        fontSize: 20,
        textAlign: 'justify',
        fontWeight: 'bold',
    },
    pag: {
        backgroundColor: "#E5E5E5",
        height: '100%',
        width: '100%',
        padding: '10%',
        flex: 1,
        flexDirection: 'column',
        position: 'relative',

    },
    subtitle: {
        fontWeight: '600',
        fontSize: 20,
    },
    parrafo: {
        fontWeight: '400',
        fontSize: 13,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    elements: {
        marginRight: '1%',
        fontSize: 20,
        fontWeight: 'bold',

    },
    column: {
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: '5%',
        marginBottom: '8%',
    },
    comment:
    {
        color: "black",
        textAlign: "right",
        fontSize: 20,
        marginLeft: '60%',
        marginTop: '20%',
    },

})