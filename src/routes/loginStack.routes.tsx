import react from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import  {Login, Adicionar} from '../pages'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name= "adicionar" component={Adicionar} />
  </Stack.Navigator>
  );
}