import React from 'react'
import { Image, View, Text } from 'react-native'
import UselessTextInput from '../components/input.js'
import { Button} from 'app/buttoninicio.js';


export default function Home () {
    return(
        <View>
            <image source={require('./icon.png')}/>;
            <View>
                <Text>Hola</Text>
            </View>
            <View>
                <UselessTextInput> </UselessTextInput>
            </View>
            
            </View>
    );


}


