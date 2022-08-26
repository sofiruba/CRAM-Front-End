import axios from "axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"

export default function ReseñasView({restaurante}){
    /*const [reseñas, setReseñas] = useState([])
    
    const getReseñas =() =>{
        return axios.get('http://localhost:3000/reseñas/?IdLugar='+ restaurante.IdLugar)
        .then(res => {
            const l = res.data
            setReseñas(l)
        })
    }
    
    useEffect(() => {
        getReseñas()
    })
    */
   const reseñas = [{IdReview: 1, titulo: 'HAYSHGS', descripcion: 'que bueno ou sofi'}, {IdReview: 10, titulo: 'HAYSHGS', descripcion: 'que bueno ou sofi'}]
    return(
        <View>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
        </View>
    )
}