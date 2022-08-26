import { View, Text } from "react-native"
export default function Puntaje({puntaje}){
    const estrellas_vacias = 5 - puntaje
    const mostrarEstrellas = () =>{
        for(let i = 0;i < puntaje; i++ ){
         return (
            <View> 
                <Text>Hola</Text>
            </View>
         )
        }
        for(let i = 0; i <estrellas_vacias; i++){
            return(
                <View>
                    <Text>Nop</Text>
                </View>
            )
        }
    }
    return mostrarEstrellas
    
}