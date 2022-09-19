import axios from "axios"
import { useEffect } from "react"
import { View, StyleSheet, Text, Button } from "react-native"
export default function Filtros({ props }) {



    //https://github.com/react-native-image-picker/react-native-image-picker
    // después hacer el título un botón con animación para que salgan los filtros (se hace con hide?:)
    return (
        <View style={styles.row}>
            <Text style={styles.titulo}>Filtros</Text>
            <View style={styles.filtroc}>
                <Text style={styles.filtro}>Kosher</Text>
            </View>

            <View style={styles.filtroc}>
                <Text style={styles.filtro}>Vegano</Text>
            </View>

            <View style={styles.filtroc}>
                <Text style={styles.filtro}>Vegetariano</Text>
            </View>

            <View style={styles.filtroc}>
                <Text style={styles.filtro}>Sin tacc</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 30,
        height: 30,
    },
    titulo: {
        color: '#605e5e',
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 12,
        marginRight: 6,


    },
    filtroc: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
    },
    filtro: {
        fontSize: 16,
        marginHorizontal: 2,
    }
})