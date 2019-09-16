import React from 'react';
import { Button } from 'react-native';
import Home from './src/screens/Restaurants/Index';
import RestaurantList from './src/screens/Restaurants/RestaurantList';
import ItemList from './src/screens/Restaurants/ItemList';
import Cart from './src/screens/Cart';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Restaurants: { screen: RestaurantList },
    ItemList: { screen: ItemList },
    Cart: { screen: Cart }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#47d9a8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
