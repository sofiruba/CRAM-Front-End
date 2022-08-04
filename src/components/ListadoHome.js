import Card from "./card"
import { View } from "react-native"
export default function ListadoHome({ lugares}){

    return (
        <View>
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