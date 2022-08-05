import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";


//* Para Le Pain Quotidien fuente POPPINS,para Confiteria y Descuentos disponibles HEEBO , para agregar lista LIBRE FRANKLIN y para mas informacion ARIMO
export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.pag}>

            <View>
                <Image style={styles.img}source={require('../assets/Restaurante-ejemplo.jpg')} />
                <Text style={styles.title}> Le Pain Quotidien   </Text>
                <View >
                    <Text style={styles.subtitle}>Confiteria</Text>
                    <Text style={styles.parrafo}>mas informacion ..............................................</Text>
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
        height: '50%',
        width: '100%',
        marginTop: '10%',
        justifyContent: 'center',
    },
    tinyimg:{
        height: '100%',
        width: '100%',
        justifyContent: 'left',
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pag: {
        backgroundColor: "#E5E5E5",
        height: '100%',
        width: '100%',
        padding: '10%',
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
        marginRight:'1%',
        fontSize: 20,
        fontWeight: 'bold',

    },
    column: {
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: '5%',
        marginBottom: '8%',
    },
    
})