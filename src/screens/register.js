import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import FormRegistrar from '../components/formRegistrar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register() {

    const navigation = useNavigation();
    const register = () => {
        return navigation.navigate('Home')
    }


    /*const register = (user) => {

        return axios.post('http://localhost:3000/auth/login', user)
            .then(res => {
                if (res.status = 201) {
                    navigation.navigate('Home', user)
                }
                else {
                    console.log(res.message)
                }
            })
            .catch(error => {
                console.error('error', error)
            })
    }*/

    return (
        <View style={styles.pag}>
            <Icon style={styles.arrow} name="arrow-left" size={20} onPress={() => navigation.goBack()} ></Icon>

            <FormRegistrar register={register}></FormRegistrar>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 700,
        marginTop: 30,
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 60,
    },
    pag: {
        backgroundColor: '#F7D250',
        height: '100%',
        width: '100%',
        flex: 1,
    },
    arrow: {
        marginLeft: 20,
        marginTop: 30,
    },
    
});