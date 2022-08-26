import { View, Text} from "react-native"

export default function ListadoReseñas ( {reseñas}){
    return(
        <View>
            {reseñas.map(r => (
                <Text>{r.nombre}</Text>
            ))}
        </View>
    )
}