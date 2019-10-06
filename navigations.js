import Home from './src/screens/restaurants/Index';
import RestaurantList from './src/screens/restaurants/RestaurantList';
import ItemList from './src/screens/restaurants/ItemList';
import Cart from './src/screens/Cart';
import User from './src/screens/user/user';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DrawerView from './src/components/drawer-view';

import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    User: { screen: User },
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


const DrawerNavigator = createDrawerNavigator({
  Home: MainNavigator,
},
{
  contentComponent: DrawerView,
});


export default DrawerNavigator;