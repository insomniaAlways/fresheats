import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Restaurants from './src/screens/Restaurants/index';

export default function App() {
  return <Restaurants />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
