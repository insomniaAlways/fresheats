import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/Landing';
import Cart from './src/screens/Cart';

export default function App() {
  return <Cart />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
