import { SafeAreaView, ScrollView,  StyleSheet} from "react-native"
import CardReseña from "../components/CardReseña"

export default function ListadoReseñas ({reseñas}){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {reseñas.map(r => (

                <CardReseña key={r.IdReview} props={r}></CardReseña>

            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 500,
        alignItems: 'center',
        width: 400
    },
})
