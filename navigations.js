import Home from './src/screens/restaurants/Index';
import RestaurantList from './src/screens/restaurants/RestaurantList';
import ItemList from './src/screens/restaurants/ItemList';
import Cart from './src/screens/Cart';
import User from './src/screens/user/user';
import React from 'react';
import DrawerView from './src/components/drawer-view';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from './src/screens/Authentication/Login';
import AuthLoadingScreen from './src/screens/Authentication/AuthLoadingScreen';

const AppStack = createStackNavigator(
  {
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

const DrawerNavigator = createDrawerNavigator({ Home: AppStack }, { contentComponent: DrawerView });

const AuthStack = createStackNavigator({ Login: Login }, { headerMode: 'none'});

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default Navigation;