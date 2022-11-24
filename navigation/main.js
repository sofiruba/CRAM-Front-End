import React from 'react';
import LoginScreen from '../src/screens/login';
import HomeScreen from '../src/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../src/screens/restaurantePerfil'
import Register from '../src/screens/register'
import CrearReseña from '../src/screens/CrearReseña';
import ReseñasView from '../src/screens/reseñas';
import AgregarRestaurante from '../src/screens/AgregarRestaurante';
const Stack = createNativeStackNavigator();
export default function Main() {
  //props de crear reseñas: lugar y user
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} initialParams={{ user: {} }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} initialParams={{ props: {} }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Reseñas" component={ReseñasView} options={{ headerShown: false }} initialParams={{ lugar: {} }}/>
        <Stack.Screen name="CrearReseña" component={CrearReseña} options={{ headerShown: false }} initialParams={{ props: {}}} /> 
        <Stack.Screen name="AgregarRestaurante" component={AgregarRestaurante} options={{ headerShown: false }} initialParams={{ props: {}}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}