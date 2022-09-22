import React, { useState } from 'react'
import { Image, StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native'
import FormRegistrar from '../components/formRegistrar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function Register() {

    const navigation = useNavigation();



    const register = (user) => {

        return axios.post('http://localhost:3000/auth/register', user)
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
    }

    return (
        <View style={styles.pag}>
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
    
});