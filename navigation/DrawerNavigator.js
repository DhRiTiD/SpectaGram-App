import React from 'react';

import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon } from 'react-native-elements'
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator'
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>    
    <Drawer.Screen name="Home" component={StackNavigator}/>
    <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
