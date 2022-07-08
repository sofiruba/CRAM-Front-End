import React from 'react'
import { Image, View, Text, Button, Input } from 'react-native'
import tw from 'twrnc'

export default function Profile({navigation}) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Ir a home" onPress={() => navigation.push('Home')} />
        </View>
    );

}
