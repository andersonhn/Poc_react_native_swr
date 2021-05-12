// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../api/screens/home/home';
import { Books } from '../api/screens/books/books';
import { Cars } from '../api/screens/cars/cars';
import { Devices } from '../api/screens/devices/devices';
import { Cameras } from '../api/screens/cameras/cameras';
import { Persons } from '../api/screens/persons/persons';

const Stack = createStackNavigator();

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Persons" component={Persons}></Stack.Screen>
                <Stack.Screen name="Books" component={Books}></Stack.Screen>
                <Stack.Screen name="Cameras" component={Cameras}></Stack.Screen>
                <Stack.Screen name="Devices" component={Devices}></Stack.Screen>
                <Stack.Screen name="Cars" component={Cars}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}