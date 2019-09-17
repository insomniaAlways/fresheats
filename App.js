import React from 'react';
import { Button, View, Text } from 'react-native';
import Home from './src/screens/Restaurants/Index';
import RestaurantList from './src/screens/Restaurants/RestaurantList';
import ItemList from './src/screens/Restaurants/ItemList';
import Cart from './src/screens/Cart';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { HeaderButtons, HeaderButton, Item, HiddenItem, defaultOnOverflowMenuPress } from 'react-navigation-header-buttons';

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={23} color="blue" />
);


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Restaurants: { screen: RestaurantList },
    ItemList: { screen: ItemList },
    Cart: { screen: Cart }
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
      },
      headerRight: (
        <HeaderButtons 
          HeaderButtonComponent={IoniconsHeaderButton}
          OverflowIcon={<Icon name="ellipsis-v" size={23} color="#fff" />}
          onOverflowMenuPress={({ overflowButtonRef, hiddenButtons }) =>
            defaultOnOverflowMenuPress({
              overflowButtonRef,
              hiddenButtons,
              cancelButtonLabel: 'cancel - custom iOS label!',
            })
          }
        >
          <Item title="Search" iconName="search" iconColor="#fff" onPress={() => alert('Search')} />
          {/* HiddenItem is the same as  show="never" for Item */}
          <HiddenItem title="hidden" onPress={() => alert('hidden shortcut')} />
        </HeaderButtons>
      )
    })
  }
);

const App = createAppContainer(MainNavigator);

export default App;
