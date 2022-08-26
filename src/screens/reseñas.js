import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"

export default function ReseñasView(lugar) {
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
   console.log(lugar)
    let restaurante = lugar.route.params.lugar
    const reseñas = [{ IdReview: 1, titulo: 'Me gusto', descripcion: 'que bueno ou sofi', puntaje: 3 }, { IdReview: 10, titulo: 'Malardo', descripcion: 'que bueno ou sofi', puntaje: 1 }]
    console.log(restaurante)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}> {restaurante.nombre}</Text>

            </View>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
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
});
