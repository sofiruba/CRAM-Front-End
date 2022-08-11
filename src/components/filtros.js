import { View, StyleSheet, Text, Button} from "react-native"
export default function Filtros(){
    return(
        <View style={styles.row}>
            <Button style={styles.titulo} title='Filtros'></Button>
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
        marginBottom: '5%',
        marginTop: '-18%',
    },
    titulo:{
        fontWeight: 'bold',
        color: '#91908d',
        fontSize: 25,
        backgroundColor: '#F5F5F5F5',
        borderRadius: 8,
        marginRight: '2%',
        width: '14%',
        textAlign: 'center',
    },
    filtro:{
        marginRight: '2%',
        fontSize: 16,
    }
})