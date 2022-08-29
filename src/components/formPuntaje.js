import { View, Text, StyleSheet } from "react-native"
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function FormPuntaje({props}){


    const estrellas = []
    const estrellas_vacias = 5 - props.puntaje

    for (let i = 0; i < props.puntaje; i++) {
        estrellas.push(
            <Icon size={50} name={'star'} style={styles.star_filled} key={i} onPress={()=>props.setPuntaje(props.puntaje-1)}></Icon>
        )
    }
    for (let i = 0; i < estrellas_vacias; i++) {
        estrellas.push(
            <Icon name={'star'} size={50} style={styles.star} key={i + props.puntaje} onPress={()=>props.setPuntaje(props.puntaje+1)} ></Icon>
        )
    }

    return (
        <View style={styles.row}>
            {estrellas}
        </View>
    )
}
const styles = StyleSheet.create({
    star_filled: {
        color: '#FFC800',
    },
    star: {
        color: 'rgba(255, 200, 0, 0.2)',

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})