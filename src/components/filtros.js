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
    },
    titulo: {
        fontWeight: 'bold',
        color: '#91908d',
        fontSize: 18,
        backgroundColor: '#F5F5F5F5',
        borderRadius: 6,
        marginRight: 6,
        width: 56,
        textAlign: 'left',
    },
    filtroc: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(233, 199, 76, 1)',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 232, 149, 0.38)',
            marginRight: 6,
    },
    filtro: {
        fontSize: 16,
        marginHorizontal: 1,
    }
})