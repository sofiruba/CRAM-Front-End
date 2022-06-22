import React from 'react'
import {View, Button, StyleSheet}  from 'react-native'
export default function BotonLogin ({navigation}) {
    return(
        <View >
        <Button title="Ingresar"  color= "#D8A625" onPress={()=> navigation.navigate('Home')} />
        </View>
    );
};
