import React from "react"
import { View, Text, StyleSheet } from "react-native-web"


export default function Card  (props) {
    return (
        <View style={styles.container}>
            {props.map((t) => {
                <Text> {t} </Text>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '10px',
        height: '10px',
        backgroundColor: 'green',
    },
})