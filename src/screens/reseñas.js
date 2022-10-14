import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"
import { useNavigation } from "@react-navigation/native"
import { Arvo_400Regular } from "@expo-google-fonts/dev"
import { useFonts } from "@expo-google-fonts/dev"

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
    let [loaded] = useFonts({
        Arvo_400Regular,
      });
      if (!loaded) {
        return null;
      }
    const restaurante = props.route.params.props.route.params.props.lugar
    const usuario = props.route.params.props.route.params.props.User.route.params.user
    props = {usuario, restaurante}
    const usuarios_reseñas = []
    const reseñas = [{ IdReview: 1, titulo: 'Me gusto', descripcion: 'que bueno ', puntaje: 4, IdUsuario: 3 , foto: 'https://i.pinimg.com/600x315/b7/e1/20/b7e12039ad5f2c98b9cd5a57492fdfca.jpg'}, { IdReview: 10, titulo: 'Malardo', descripcion: 'que malo ', puntaje: 1, IdUsuario: 3  }]
    /*reseñas.map(r => {
            axios.get('localhost:3000/usuarios/'+ r.IdUsuario)
            .then(res => {
                usuarios_reseñas.push(res.data)
            })
    })*/
    return (
        <View style={styles.container}>
            <View>
                <Text style={[{ fontFamily: 'Arvo_400Regular' },styles.titulo]}>Reseñas</Text>

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
        backgroundColor: "#F7D250",
        height: '100%',
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 70,
        marginBottom: 68,
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
});
