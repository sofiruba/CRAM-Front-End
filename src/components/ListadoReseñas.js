import { View, Text, StyleSheet} from "react-native"
import CardReseña from "../components/CardReseña"

export default function ListadoReseñas (){
    const reseñas = [{IdReview: 1, titulo: 'HAYSHGS', descripcion: 'que bueno ou sofi'}, {IdReview: 10, titulo: 'HAYSHGS', descripcion: 'que bueno ou sofi'}]
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
