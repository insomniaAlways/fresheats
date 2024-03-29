import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

export default function App() {
  let itemList = (
    <View style={{marginBottom: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <Text ellipsizeMode={'tail'} numberOfLines={1} style={{fontSize: 16, fontWeight: '500', width: '70%'}}>Hello</Text>
          <Text>(500gm)</Text>
        </View>
        <View style={{ 
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightColor: 'grey',
              borderRightWidth: 1,
              width: 18,
              paddingRight: 10
            }}>
            <Text style={{fontSize: 16}}>-</Text>
          </View>
          <Text style={{fontSize: 16, color: 'green', fontWeight: '500'}}>1</Text>
          <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftColor: 'grey',
              borderLeftWidth: 1,
              width: 18,
              paddingLeft: 10
            }}>
            <Text style={{color: 'green'}}>+</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>$123</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 20, paddingBottom: 10, backgroundColor: '#fff'}}>
        <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10, borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10}}>Added Items</Text>
        {itemList}
        {itemList}
        {itemList}
        {itemList}
      </View>
      <View style={{padding: 20, paddingBottom: 0, backgroundColor: '#fff', marginTop: 20, paddingBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Bill Details</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <Text style={{fontSize: 16}}>Item Total</Text>
          <Text style={{fontSize: 16}}>$123</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}>Delivery Charge</Text>
          <Text style={{fontSize: 16}}>$123</Text>
        </View>
        <View style={{borderTopColor: '#eee', borderTopWidth: 1, marginTop: 10, marginBottom: 10}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: '500', fontSize: 16}}>To Pay</Text>
          <Text style={{fontWeight: '500', fontSize: 16}}>$123</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', backgroundColor: '#fff', alignItems: 'center', backgroundColor: "#4CA3DA", height: 60, bottom: 0, position: 'absolute', width: '100%'}}>
        <Text style={{fontWeight: '500', fontSize: 20, color: '#fff'}}>Select Address</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    marginTop:24,
    backgroundColor: '#eee'
  }
});
