import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CategoryCircle(props) {
  return (
    <TouchableOpacity onPress={() => props.navigate('Restaurants')}>
      <View style={{borderRadius: 50, borderColor: '#eee', borderWidth: 2, width: 60, height: 60, borderStyle:'solid', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
        <Icon name={props.name} size={30} color='#47d9a8' />
      </View>
    </TouchableOpacity>
  );
};