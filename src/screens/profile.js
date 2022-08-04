import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={styles.pag}>
            <View >
                <Text style={styles.title}> Le Pain Quotidien   </Text>
                <View >
                    <Icon name={'heart'} style={styles.corazon} />
                    <Text style={styles.subtitle}>Cafeteria</Text>
                </View>
                <View>
                    <Image source={require('../assets/Restaurante-ejemplo.jpg')} />
                </View>
            </View>
            <Button title="Ir a home" color="#DE95DB" onPress={() => navigation.goBack()} />
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'semibold',
    },
    pag: {
        backgroundColor: "#F5D2F6",
        height: '100%',
        width: '100%',
    },
    subtitle:{
        fontWeight: 'bold',
        fontSize: 20,
    },
})