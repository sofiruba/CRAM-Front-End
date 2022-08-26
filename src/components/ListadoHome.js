import Card from "./card"
import { View, StyleSheet } from "react-native"

export default function ListadoHome({ lugares }) {

    return (
        <View style={styles.container}>
            {
                lugares.map((l) => (
                    <Card key={l.IdLugar} props={l}></Card>
                )
                )
            }
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
