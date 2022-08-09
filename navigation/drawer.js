import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../src/screens/Restaurantprofile'
import HomeScreen from '../src/screens/home';
const Drawer = createDrawerNavigator();
export default function DrawerNav() {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" style={{backgroundColor:"#F5D2F6"}}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}