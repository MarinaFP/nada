import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import {Começar} from '../pages/Começar'
import {Login} from '../pages/Login'
import {Adicionar} from '../pages/Adicionar'
import {Localizacao} from '../pages/Localizacao'

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Começar">
                <Stack.Screen name="Começar" component={Começar} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Adicionar" component={Adicionar} />
                <Stack.Screen name="Localizacao" component={Localizacao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}