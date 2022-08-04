import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Profile() {
    const navigation = useNavigation(); 
    return (
        <View>
            <View >
            <Text > Le Pain Quotidien   </Text>
                <Icon name={'heart'} style={styles.corazon} />
                <View >
                    <Text > Cafeteria  </Text>
                </View>
                <Text>
                    <Image  source={{ uri: "http://a.mktgcdn.com/p/-55WSHHf7rFgzRzrSakV5dsI5Xd80qnW2Di3ZcwY5Kw/1280x720.jpg" }} />
                </Text>
            </View>
            <Button title="Ir a home" onPress={() => navigation.goBack()} />
        </View>
    );

}

const styles = StyleSheet.create({
    title:{}, 
})