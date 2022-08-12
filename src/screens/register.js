import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
export default function LoginScreen() {

    const navigation = useNavigation();
    const login = () => {
        return navigation.navigate('Home')
    }

    return (
        <View style={styles.pag}>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/icon.png')}></Image>
                <RegisterForm register={register}></RegisterForm>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 375,
        marginTop: '40%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '8%',
        marginTop: '50%',
    },
    pag: {
        backgroundColor: '#F7D250',
        height: '100%',
        width: '100%',
        flex: 1,
    },
});