import React from 'react'
import {TextInput} from 'react-native'

export default function Busqueda(){
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });
    
        const newData = this.state.Items.filter(item => {
            const itemData = `${item.NombreCompleto.toUpperCase()}${item.CorreoElectronico.toUpperCase()}${item.Id}`;
            const textData = textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        
        this.setState({
            items: newData,
        });
    };
    return (
        <TextInput placeholder="Buscar" onChangeText={text => tinstallReactHook.searchFilterFunctoString(text)} />
    )
}


