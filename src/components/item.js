import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Image1 from "./../../assets/images/test.jpg";

function Item() {
  const [ count, setCount ] = useState(0)

  let addButton = (
    <TouchableOpacity onPress={() => setCount(count + 1)}>
      <View style={{backgroundColor: '#47d9a8', width: 70, padding: 5, borderRadius: 5}}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Add</Text>
      </View>
    </TouchableOpacity>
  )

  let modifyButton = (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: '#eee', borderWidth: 1}}>
      <TouchableOpacity onPress={() => { count != 0 ? setCount(count - 1) : false }}>
        <View style={{borderRightWidth: 1, borderRightColor: '#eee', paddingRight: 10, paddingLeft: 10}}> 
          <Text>-</Text>
        </View>
      </TouchableOpacity>
      <View style={{paddingTop: 3, paddingRight: 10, paddingBottom: 5, paddingLeft: 10}}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <View style={{borderLeftWidth: 1, borderLeftColor: '#eee', paddingRight: 10, paddingLeft: 10}}> 
          <Text style={{color: '#47d9a8'}}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  let addView = (
    <View>
      { count == 0 ?  addButton : modifyButton }
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eee', borderBottomWidth: 1}}>
        <View style={{flex: 1, margin: 10}}>
          <Image
            style={{width: '100%', height: 110}}
            source={Image1}
          />
        </View>
        <View style={{flex: 3, margin: 10}}>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text ellipsizeMode={'tail'} numberOfLines={2} style={{fontWeight: '500', fontSize: 20}}>Item Name</Text>
            <Text>Rs. 250.00</Text>
            <Text>More Content</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Rating: </Text>
              {addView}
            </View>
          </View>
        </View>
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

Item.navigationOptions = ({ navigation }) => ({
  title: 'Items List'
})

export default Item;
