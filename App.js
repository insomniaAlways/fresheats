import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/Landing';

export default function App() {
  return <LandingScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
