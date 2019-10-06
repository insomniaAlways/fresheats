import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import ItemView from '../../components/item';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

function ItemsList(props) {
  let value=''
  return (
    <View style={styles.container}>
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
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={{marginLeft: 10}}>
          <Icon name="ellipsis-v" size={23} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  )
})

const mapPropsToState = state => state

export default connect(mapPropsToState)(ItemsList);
