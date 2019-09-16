import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Image1 from "./../../assets/images/test.jpg";

export default function Restaurant(props) {

  const { navigate } = props.navigation;  
  return (
    <TouchableOpacity onPress={() => navigate('ItemList', { restaurantName: 'High Street'}) }>
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

