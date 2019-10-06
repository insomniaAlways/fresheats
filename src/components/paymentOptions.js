import React from 'react';
import { View, Text } from 'react-native';
import AtmCard from './atmCard';
import MobileWallet from './mobileWallet';

function PaymentOptions() {
  return (
    <View style={{alignItems: "center"}}>
      <View style={{width: "80%"}}>
        <View>
          <Text style={{fontWeight: '500'}}>Saved Cards</Text>
          <AtmCard />
          <AtmCard />
          <AtmCard />
          <AtmCard />
        </View>
        <View>
          <Text style={{fontWeight: '500', width: '100%', textAlign: 'left'}}>Mobile Wallets</Text>
          <MobileWallet style={{padding: 10}}/>
        </View>
      </View>
    </View>
  )
}

export default PaymentOptions;