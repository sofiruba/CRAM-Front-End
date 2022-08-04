import React from 'react'
import {View, Text, Button } from 'react-native'


export default function Profile({navigation}) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Ir a home" onPress={() => navigation.push('Home')} />
        </View>
    );

}
