import Card from "./card"
import { View, StyleSheet } from "react-native"
import { useContext } from "react"
import { UserContext } from "../screens/home"

export default function ListadoHome({ lugares }) {
    const User = useContext(UserContext)
    return (
        <View style={styles.container}>
            {
                lugares.map((lugar) => (
                    <Card key={lugar.IdLugar} props={{lugar, User}}></Card>
                )
                )
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 450,
        marginTop: 30,
        width: '100%',
        backgroundColor: "#FFF",
        borderRadius: 60,
    },
})
