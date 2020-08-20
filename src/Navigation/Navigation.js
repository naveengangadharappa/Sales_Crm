import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../Screens/Login';
import FirstScreen from '../Screens/FirstScreen';
import Dashboard from '../Screens/Dashboard';
import Leads from '../Screens/Leads';

let MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    First: FirstScreen,
    Home: Dashboard,
    Lead: Leads
  },
  {
    initialRouteName: 'Lead',
    headerMode: 'none',
  },
);
/*let DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    //Navigation Container style
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 280,
    //drawerLockMode: 'locked-open',
    contentComponent: DrawerContainer,
  },
);*/
export default (AppContainer = createAppContainer(MainNavigator));

console.disableYellowBox = true;
