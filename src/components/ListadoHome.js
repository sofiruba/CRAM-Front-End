import Card from "./card"
import { View, StyleSheet } from "react-native"
export default function ListadoHome({ lugares}){

    return (
        <View style={styles.card}>
        {
            lugares.map((l) => {
                return (
                    <Card key={l.IdLugar} props={l}></Card>
                )
            })
        }
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: '95%',

    },
})
