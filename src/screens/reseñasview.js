import axios from "axios"
import { useEffect, useState } from "react"
import { View } from "react-native"
import ListadoReseñas from "../components/ListadoReseñas"

export default function ReseñasView({restaurante}){
    const [reseñas, setReseñas] = useState([])
    /*
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
    return(
        <View>
            <ListadoReseñas reseñas={reseñas}></ListadoReseñas>
        </View>
    )
}