import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { começarStyle} from '../styles/começar.style'
import { ImageBackground, View, Button} from 'react-native';

export function Começar() {
    const navigation = useNavigation();
    return (
        <View style={começarStyle.container}>
                <View style={começarStyle.botao}>
                    <Button title="COMEÇAR" onPress={() => navigation.navigate('Login')}/>
                </View>
        </View>
    )
}

export default Começar;