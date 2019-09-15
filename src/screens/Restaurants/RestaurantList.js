import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Image1 from "./../../../assets/images/test.jpg";
import { Button } from 'react-native-elements';

export default function Restaurants(props) {
  let value=''
  const { navigate } = props.navigation;
  let item = (
    <TouchableOpacity onPress={() => navigate('ItemList') }>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eee', borderBottomWidth: 1}}>
        <View style={{flex: 1, margin: 10}}>
          <Image
              style={{width: '100%', height: 100}}
              source={Image1}
          />
        </View>
        <View style={{flex: 3, margin: 10}}>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={{fontWeight: '500', fontSize: 20}}>High Street</Text>
            <Text>Loaction</Text>
            <Text>View more</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text>Rating: </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <View style={{flex:1, paddingtop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}>
        <TextInput
          style={{ height: 40, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: '#eee', borderWidth: 1 }}
          placeholder='Search'
          inlineImageLeft='search_icon'
          value={value}
        />
      </View>
      {/* <View style={{flex: 1, paddingLeft: 20, paddingTop: 10, paddingRight: 20}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Restaurants: </Text>
      </View> */}
      <View style={{flex: 16}}>
        <ScrollView>
          {item}
          {item}
          {item}
          {item}
          {item}
          {item}
          {item}
          {item}
          {item}
          {item}
          {item}
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

Restaurants.navigationOptions = ({ navigation }) => ({
  title: 'Restaurants',
  // headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // }
})

