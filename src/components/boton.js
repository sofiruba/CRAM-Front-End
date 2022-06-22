import React from 'react'
import {View, Button, StyleSheet}  from 'react-native'
export default function Boton (props, {navigation}) {
    return(
        <View >
        <Button title={props.title}  color= {props.color} onPress={props.onpress} />
        </View>
    );
};
