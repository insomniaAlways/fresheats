import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, Modal, TouchableOpacity } from 'react-native';
import RestaurantView from '../../components/restaurant';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Restaurants(props) {
  const [ openModal, toggleModal ] = useState(false)

  let value=''
  
  return (
    <View style={styles.container}>
      <View style={{flex:1, paddingtop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}>
        <Text>Added Filter: </Text>
      </View>
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

Restaurants.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 15}}>
        <View style={{marginRight: 10}}>
          <Icon name="search" size={23} color="#fff" />
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{marginLeft: 10}}>
            <Icon name="ellipsis-v" size={23} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

