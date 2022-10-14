import { View,  StyleSheet} from "react-native"
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
        height: 700,
        marginTop: 30,
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 60,
    },
})
