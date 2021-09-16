import React from 'react'
import { useNavigation } from '@react-navigation/core';
import {Text } from 'react-native';

export function Localizacao() {
    const navigation = useNavigation();

    return (
            <Text>Ative sua localização</Text>
    )
};

export default Localizacao;