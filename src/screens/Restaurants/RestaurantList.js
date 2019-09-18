import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, Modal } from 'react-native';
import RestaurantView from '../../components/restaurant';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Restaurants(props) {
  const [ openModal, toggleModal ] = useState(false)

  let value=''
  
  return (
    <View style={styles.container}>
      <View style={{flex:1, paddingtop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}>
        {/* <TextInput
          style={{ height: 40, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: '#eee', borderWidth: 1 }}
          placeholder='Search'
          inlineImageLeft='search_icon'
          value={value}
        /> */}
        <Text>Added Filter: </Text>
      </View>
      {/* <View style={{flex: 1, paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Restaurants: </Text>
      </View> */}
      <View style={{flex: 16}}>
        <ScrollView>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
          <RestaurantView navigation = {props.navigation}/>
        </ScrollView>
      </View>
      <Modal visible={openModal}>
        <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={toggleModal(false)}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
      </Modal>
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
    marginTop:10
  },
  borderView: {
    borderWidth: 1,
    borderColor: 'black'
  }
});

Restaurants.navigationOptions = ({ navigation }) => ({
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

