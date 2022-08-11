import { View, StyleSheet, Text, Button} from "react-native"
export default function Filtros(){

    // después hacer el título un botón con animación para que salgan los filtros (se hace con hide?:)
    return(
        <View style={styles.row}>
            <Text style={styles.titulo}>Filtros</Text>
            <Text style={styles.filtro}>Kosher</Text>
            <Text style={styles.filtro}>Vegano</Text>
            <Text style={styles.filtro}>Vegetariano</Text>
            <Text style={styles.filtro}>Sin tacc</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'center',
    },
    titulo:{
        fontWeight: 'bold',
        color: '#91908d',
        fontSize: 18,
        backgroundColor: '#F5F5F5F5',
        borderRadius: 6,
        marginRight: 6,
        width: 56,
        textAlign: 'left',
    },
    filtro:{
        marginRight: '2%',
        fontSize: 16,
    }
})