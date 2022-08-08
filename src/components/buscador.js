import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Buscador() {
    return (
        <View style={styles.busca}>
            <Icon style={styles.icon} name={'search'} size={15} />
            <TextInput style={styles.text} placeholder=" Buscar..." />

        </View>
    )
}
const styles = StyleSheet.create({
    busca: {
        backgroundColor: 'white',
        width: '80%',
        height: '4%',
        opacity: 0.6,
        color: 'white',
        fontStyle: 'italic',
        borderRadius: 20,
        shadowColor: "7% 7% 5% rgba(0, 0, 0, 0.1)",
        margin: '9%',
        marginBottom: '12%',
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginTop: '1%',
        marginLeft: '2%',
        fontSize: 14,
        color: 'white',
    },
    icon: {
        alignItems: 'flex-start',
        color: 'white',

    }
})
