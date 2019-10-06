import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function AddressCard() {
  return (
    <View style={{alignItems: "center"}}>
      <View style={styles.addressCard}>
        <Text style={{fontWeight: '500'}}>
          Address 1
        </Text>
        <Text>Hello</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addressCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '80%'
  }
})

export default AddressCard;