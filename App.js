import React from 'react';
import Home from './src/screens/restaurants/Index';
import RestaurantList from './src/screens/restaurants/RestaurantList';
import ItemList from './src/screens/restaurants/ItemList';
import Cart from './src/screens/Cart';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Restaurants: { screen: RestaurantList },
    ItemList: { screen: ItemList },
    Cart: { screen: Cart },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      headerStyle: {
        backgroundColor: '#47d9a8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1
      }
    })
  }
);

const App = createAppContainer(MainNavigator);

export default App;
