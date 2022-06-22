import React from 'react'
import {  View, Text, Button, Input, StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {Card} from '../components/card'

export default function HomeScreen({ navigation }) {
    return (
        
        <View style={styles.pag}>
            <Text>HomeScreen</Text>

            <Button title="Ir a Login" onPress={() => navigation.push('Login')} />
        </View>
    );
 
}

const styles = StyleSheet.create({
    pag: {
        backgroundColor: '#F6D250',
        height: '100%',
        width: '100%',
    },
})