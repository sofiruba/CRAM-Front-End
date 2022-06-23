import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../src/screens/profile'

const Drawer = createDrawerNavigator();
export default function DrawerNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Perfil" component={Profile} />
                 
            </Drawer.Navigator>
        </NavigationContainer>
    )
}