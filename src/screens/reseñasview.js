import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"

export default function ReseñasView(lugar){
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
   const reseñas = [{IdReview: 1, titulo: 'HAYSHGS', descripcion: 'que bueno ou sofi'}, {IdReview: 10, titulo: 'HAYSHGS', descripcion: 'que bueno ou sofi'}]

    return(
        <View>
            <Text> {restaurante.nombre}</Text>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
        </View>
    )
}