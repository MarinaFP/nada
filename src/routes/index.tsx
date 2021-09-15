import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabroutes from './tab.routes';

export default function Routes() {
    return(
      <NavigationContainer>
        <Tabroutes /> 
      </NavigationContainer>
    )
}