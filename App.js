// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import RestaurantList from './src/screens/Restaurants/RestaurantList';
import Home from './src/screens/Restaurants/Index';
import ItemList from './src/screens/Restaurants/ItemList';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Restaurants: { screen: RestaurantList },
    ItemList: { screen: ItemList },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#47d9a8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
