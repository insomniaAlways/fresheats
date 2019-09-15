import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemList from './src/screens/Restaurants/ItemList';

export default function App() {
  return <ItemList />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
