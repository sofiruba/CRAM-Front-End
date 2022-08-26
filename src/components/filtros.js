import axios from "axios"
import { useEffect } from "react"
import { View, StyleSheet, Text, Button} from "react-native"
export default function Filtros({props}){


    
    //https://github.com/react-native-image-picker/react-native-image-picker
    // después hacer el título un botón con animación para que salgan los filtros (se hace con hide?:)
    return(
        <View style={styles.row}>
            <Text style={styles.titulo}>Filtros</Text>
            {props.filtros.map(f => (
                <Text style={style.filtro}>{f}</Text>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 30,
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
        marginRight: 6,
        fontSize: 16,
    }
})