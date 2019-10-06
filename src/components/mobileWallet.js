import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PayPal from '../../assets/brand_icon/payPalIcon.png';

function MobileWallet(props) {
  return (
    <View style={[{flexDirection: 'row', justifyContent: 'flex-start'}, props.style]}>
      <Image source={PayPal} style={styles.circularImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  circularImage: {
    borderRadius: 50,
    width: 52,
    height: 52,
    borderColor: "#47d9a8",
    borderWidth: 1,
  },
})

export default MobileWallet;