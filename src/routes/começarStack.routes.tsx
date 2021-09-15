import react from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Localizacao, Começar} from '../pages'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="começar" component={Começar} />
    <Stack.Screen name= "localização" component={Localizacao} />
  </Stack.Navigator>
  );
}