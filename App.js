import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from './src/screens/Restaurants/ItemList';
import RestaurantList from './src/screens/Restaurants/RestaurantList';

export default function App() {
  return <RestaurantList />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
