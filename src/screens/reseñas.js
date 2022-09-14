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
    let restaurante = props.route.params.props.route.lugar
    console.log(restaurante)
    const reseñas = [{ IdReview: 1, titulo: 'Me gusto', descripcion: 'que bueno ', puntaje: 4 }, { IdReview: 10, titulo: 'Malardo', descripcion: 'que malo ', puntaje: 1 }]
    console.log(restaurante)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}> {restaurante.nombre}</Text>

            </View>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
            <View style={styles.botonContainer}>
                <Button style={styles.boton} title='Crear reseña' onPress={() => navigation.navigate('CrearReseña', props )}></Button>

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
    boton:{
        width: 50,
    }
});
