import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'native-base';

function AtmCard() {
  return (
    <Card style={[styles.container]}>
      <Text style={{width: '100%'}}>
        Card Bank Name 1
      </Text>
      <Text style={{width: '100%'}}>
        Visa xxxx 2861
      </Text>
    </Card>
  )
}

export default AtmCard;

const styles = StyleSheet.create({
  cardView: {
    borderLeftWidth : 0.3333333333333333,
    borderRightWidth : 0.3333333333333333,
    borderTopWidth : 1,
    borderTopColor: '#fff',
    borderBottomWidth : 0.3333333333333333,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomColor : "#ccc",
    shadowColor : "#000",
    shadowOffset : {height: 2, width: 0 },
    shadowOpacity : 0.1,
    shadowRadius : 1.5,
    elevation : 3,
  },
  container: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  }
})