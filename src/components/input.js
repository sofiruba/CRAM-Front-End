import React from 'react'
import{SafeAreaView,StyleSheet,TextInput} from "react-native";

const UselessTextInput=()=>{
    const[text,onChangeNumber]=
    React.useState(null);

    return(
        <View>
            
            <TextInput
            style={StyleSheet.input}
            onChangeText={onChangeText }
            value={Text}
            />
             <TextInput
            style={StyleSheet.input}
            onChangeText={onChangeNumber}
             value={Number}
             placeholder="useless placeholder"
             keyboardType="numeric"
            />
            
        </View>
    );
    
};

const style=StyleSheet.create({
inpu:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
},
});
export default UselessTextInput;