import react from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Screen, Notification} from '../pages'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="screen" component={Screen} />
    <Drawer.Screen name= "notification" component={Notification} />
  </Drawer.Navigator>
  );
}