import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../src/screens/profile'
import HomeScreen from '../src/screens/home';
import LoginScreen from '../src/screens/login';
const Drawer = createDrawerNavigator();
export default function DrawerNav() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" style={{backgroundColor:"#F5D2F6"}}>
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}