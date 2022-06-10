import React from 'react'
import {View, Button, StyleSheet}  from 'react-native'
const Button=()=>{
    return(

        <View style={StyleSheet.screenContainer}>
        <Button title="Inicio"/>
        </View>
    );
};

const styles=StyleSheet.create({
    screenContainer:{
        flex:1,
        justifyContent:"center",
        padding:16
    }
});

export default app;
