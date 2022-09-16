import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SubirFoto({ props }) {

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      props.setFoto(result.uri);
    }
  };
  if (props.foto == null) {
    return (
      <View style={props.styles.foto}>
        <Text style={props.styles.mas} onPress={pickImage} >+</Text>
        {props.foto && <Image source={{ uri: props.foto }} style={{ width: 200, height: 200 }} />}
      </View>
    )
  }
  else {
    return (
      <View style={props.styles.foto}>
        {props.foto && <Image source={{ uri: props.foto }} style={{ marginTop:10, width: 200, height: 200 }} />}
      </View>
    );
  }

}
