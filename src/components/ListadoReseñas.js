import { View, Text, StyleSheet} from "react-native"
import CardReseña from "../components/CardReseña"

export default function ListadoReseñas ({reseñas}){
    return(
        <View style={styles.container}>
            {reseñas.map(r => (

                <CardReseña key={r.IdReview} props={r}></CardReseña>

            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 100,
    },
})
