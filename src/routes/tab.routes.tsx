import react from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComeçarStack from './começarStack.routes';
import LoginStack from './loginStack.routes';
import Drawer from './drawer.routes'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="ComeçarStack" component={ComeçarStack} />
        <Tab.Screen name= "LoginStack" component={LoginStack} />
        <Tab.Screen name= "Drawer" component={Drawer} />
      </Tab.Navigator>
  );
}
