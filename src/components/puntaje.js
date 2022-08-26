import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Puntaje({ puntaje }) {
    var estrellas = []
    const estrellas_vacias = 5 - puntaje

    for (let i = 0; i < puntaje; i++) {
        estrellas.push(

            <Icon size={30} name={'star'} style={styles.star_filled} key={i} ></Icon>

        )
    }
    for (let i = 0; i < estrellas_vacias; i++) {
        estrellas.push(

            <Icon name={'star'} size={30} style={styles.star} key={i + puntaje} ></Icon>

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
        color: 'yellow',
    },
    star: {
        color: 'rgba(255, 255, 0, 0.2)',

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})