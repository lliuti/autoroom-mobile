import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Touch to interact!'
      }
    },
  },
  {
    defaultNavigationOptions: {
       headerTitleAlign: 'center',
       headerTintColor: '#fff',
       headerStyle: {
         backgroundColor: '#2a2a2a',
       },
       headerTitleStyle: {
         fontSize: 28,
       },
    },
  }),
);

export default Routes;