import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"
import { useNavigation } from "@react-navigation/native"

export default function ReseñasView(props) {
    const navigation = useNavigation()
    /*const [reseñas, setReseñas] = useState([])
    
    const getReseñas =() =>{
        return axios.get('localhost:3000/reseñas/'+ restaurante.IdLugar)
        .then(res => {
            const l = res.data
            setReseñas(l)
        })
    }
    
    useEffect(() => {
        getReseñas()
    })
    */
    const restaurante = props.route.params.props.route.params.props.lugar
    
    console.log(restaurante)
    const reseñas = [{ IdReview: 1, titulo: 'Me gusto', descripcion: 'que bueno ', puntaje: 4 }, { IdReview: 10, titulo: 'Malardo', descripcion: 'que malo ', puntaje: 1 }]
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>{restaurante.nombre} </Text>

            </View>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
            <View style={styles.botonContainer}>
                <Text style={styles.boton} onPress={() => navigation.navigate('CrearReseña', props )}>Crear reseña</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 70,
        color: 'black',
    },
    botonContainer:{
        alignItems: 'center',
        marginTop: 400,
        width: 400,
        height: 120,
    },
    boton: {
        height: 50,
        width: 170,
        borderRadius: 13,
        backgroundColor: "#F0B57D",
        justifyContent: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 10,
        color: 'white',
    },
});
