import React from 'react'
import {Image, StyleSheet, View, Text } from 'react-native'
import tailwindConfig from '../../tailwind.config';
import Form from '../components/input';

export default function Login () {
    return(
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/icon.png')}></Image>
                <Form></Form>
            </View>
    );
};

const styles = StyleSheet.create({
    img: {
      height: '200px',
      width: '500px',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      }
});
