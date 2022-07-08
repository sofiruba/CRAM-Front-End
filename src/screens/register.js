import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import axios from 'axios'

export default function RegisterScreen({ navigation }) {

    const register = async (usern, pass) => {
        const usuario = { username: usern, password: pass, nombre: n, mail: e }
        const axiosRegister = axios.create({
            baseURL: 'http://localhost:3000'
        })
        return axiosRegister.post('/auth/register', usuario)
            .then(res => {
                if (res.status = 201) { //fijarse q codigo devuelve 
                    navigation.navigate('Home', { usuario })
                }
                else {
                    alert('Volver a ingresar') // hay q ver manera de hacer diferentes dependiendo el problema
                }
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    const tailwind = useTailwind();
    const [user, setUser] = useState({})
    return (
        <View style={styles.container}>
            <View style={tailwind("mt-8 space-y-6")}>
                <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
                    <TextInput
                        placeholder="Nombre"
                        onChangeText={(text) => setUser({ ...user, name: text })}
                        style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}
                    />
                </View>
            </View>
            <View style={tailwind("mt-8 space-y-6")}>
                <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
                    <TextInput
                        placeholder="Mail"
                        onChangeText={(text) => setUser({ ...user, mail: text })}
                        style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}
                    />
                </View>
            </View>
            <View style={tailwind("mt-8 space-y-6")}>
                <View style={tailwind("rounded-md shadow-sm -space-y-px")}>
                    <TextInput
                        placeholder="Usuario"
                        onChangeText={(text) => setUser({ ...user, username: text })}
                        style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}
                    />
                </View>
            </View>
            <View style={tailwind("mt-8 space-y-6")}>
                <View style={tailwind("rounded-md shadow-sm -space-y-px")}>

                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        onChangeText={(text) => setUser({ ...user, password: text })}
                        style={[tailwind("appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"), styles.formstyle]}>
                    </TextInput>
                </View>
            </View>
            <View style={styles.boton}>
                <Button title="Registrar" color="#DE95DB" onClick={register(user.username, user.password, user.name, user.mail)} > </Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    formstyle: {
        backgroundColor: 'white',
        marginBottom: '0px',
        marginTop: '0px',
        flex: 1,
    },
    margin: {
        margin: '2%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageStyle: {
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    boton: {
        marginTop: "20px",
        width: "100%"
    }

});