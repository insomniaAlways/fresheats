import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import ItemView from '../../components/item';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemsList(props) {
  let value=''
  
  return (
    <View style={styles.container}>
      {/* <View style={{flex:1, paddingtop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}>
        <TextInput
          style={{ height: 40, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: '#eee', borderWidth: 1 }}
          placeholder='Search'
          inlineImageLeft='search_icon'
          value={value}
        />
      </View> */}
      {/* <View style={{flex: 1, paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Restaurants: </Text>
      </View> */}
      <View style={{flex: 1}}>
        <ScrollView>
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
          <ItemView />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex:1,
    // justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    marginTop:5
  },
  borderView: {
    borderWidth: 1,
    borderColor: 'black'
  }
});

ItemsList.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('restaurantName', 'Items'),
  headerRight: (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 15}}>
      <View style={{marginRight: 10}}>
        <Icon name="search" size={23} color="#fff" />
      </View>
      <View style={{marginLeft: 10}}>
        <Icon name="ellipsis-v" size={23} color="#fff" />
      </View>
    </View>
  )
})
