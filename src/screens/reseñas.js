import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"
import { useNavigation } from "@react-navigation/native"
import { Poppins_700Bold } from "@expo-google-fonts/poppins"
import { useFonts } from "@expo-google-fonts/dev"
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ReseñasView(props) {
    const navigation = useNavigation()
    const [reseñas, setReseñas] = useState([{IdReview: 1,IdUsuario: 7, IdLugar: 1, puntaje: 3, destacar: 'nada', titulo: 'Normal', descripcion: 'Nada que destacar', foto: ''}, {IdReview: 2,IdUsuario: 2, IdLugar: 1, puntaje: 2, destacar: 'nada', titulo: 'No me gusto', descripcion: 'Nada que destacar', foto: ''}, {IdReview: 1,IdUsuario: 5, IdLugar: 1, puntaje: 5, destacar: 'todo', titulo: 'Amo', descripcion: 'Que buen lugar!!', foto: ''}])
    const [seguidos, setSeguidos] = useState([{'IdUsuario': 7, 'IdSeguido': 3}, {'IdUsuario': 5, 'IdSeguido': 3},{'IdUsuario': 4, 'IdSeguido': 3}])
    const restaurante = props.route.params.props.route.params.props.lugar
    const usuario = props.route.params.props.route.params.props.User
   /* const getReseñas = () => {
        return axios.get('http://localhost:3000/reviews?id_lugar=' + restaurante.IdLugar)
            .then(res => {
                const l = res.data
                setReseñas(l)
            })
    }

    useEffect(() => {
        getReseñas()
    })
    const getSeguidos = () => {
        return axios.get('http://localhost:3000/seguido/seguidores/' + usuario.IdUsuario)
            .then(res => {
                console.log(res.data)
                const l = res.data
                setSeguidos(l)
            })
    }*/
    const getReviewsSeguidos = () => {
        // getSeguidos()
        const reseñas_seguidos = []
        console.log('seguidos',seguidos)
        seguidos.map(user => {
             let nuevas_reseñas = reseñas.filter(reseña => reseña.IdUsuario == user.IdUsuario)
             reseñas_seguidos.push(nuevas_reseñas)
        })
        setReseñas(...reseñas_seguidos)
        console.log('cambiadas')
    }

    let [loaded] = useFonts({
        Poppins_700Bold,
    });
    if (!loaded) {
        return null;
    }

    props = { usuario, restaurante }

    return (
        <View style={styles.container}>
            <View>
                <Text style={[{ fontFamily: 'Poppins_700Bold' }, styles.titulo]}>{restaurante.nombre} </Text>
                <Icon style={styles.arrow} name="arrow-left" size={20} onPress={() => navigation.goBack()} ></Icon>
                <Text onPress={getReviewsSeguidos} >Ver reseñas de seguidos</Text>
            </View>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
            <View style={styles.botonContainer}>
                <Text style={styles.boton} onPress={() => navigation.navigate('CrearReseña', props)}>Crear reseña</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F7F7",
        height: '100%',
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 70,
        color: 'black',

    },
    botonContainer: {
        alignItems: 'center',
        marginTop: 400,
        width: 400,
        height: 120,
    },
    boton: {
        height: 50,
        width: 300,
        borderRadius: 30,
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
    arrow: {
        marginLeft: 40
    }
});
