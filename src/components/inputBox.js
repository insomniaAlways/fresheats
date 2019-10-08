import React from 'react';
import { View, TextInput } from 'react-native';

function InputBox(props) {
  let { value, getValue } = props
  return (
    <View style={[{flex: 1} ,props.style]}>
      <TextInput
          style={[{height: 50, padding: 10, width: '100%'}, props.inputStyle]}
          placeholder={props.placeholder}
          onChangeText={(text) => getValue(text)}
          keyboardType={props.keyboardType}
          value={value}
        />
    </View>
  )
}

export default InputBox;