import React, {useState} from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../../tailwind.json';
import LoginForm from '../components/LoginForm';

export default function LoginScreen() {

  const [user, setUser] = useState({})
  const login = async (usern, pass) => {
    const usuario = { username: usern, password: pass }
    const axiosLogin = axios.create({
      baseURL: 'http://localhost:3000/'
    })
    return axiosLogin.post('auth/login', usuario)
      .then(res => {
        if (res.status = 201) {
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

  return (
    <TailwindProvider utilities={utilities}>
      <View style={styles.pag}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../assets/icon.png')}></Image>
          <LoginForm style={styles.margin} props={{setUser, user, login}}></LoginForm>
        </View>
      </View>
    </TailwindProvider>

  )
}


const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 90,
    marginBottom: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  pag: {
    backgroundColor: '#F5D2F6',
    height: 100,
    width: 100,
  },
  margin: {
    marginTop: 5,
    margin: 10,
    marginBottom: 5,
  },

  texto: {
    color: '#D99734',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontStyle: 'bold'
  },
  r: {
    marginTop: 5,
    marginBottom: 5,
    position: 'relative',
  },
});
