import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BrandLogo from '../../../assets/brand_icon/logo_48.png';
import InputBox from '../../components/inputBox';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

function Login(props) {
  let { navigate } = props.navigation
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingBottom: 20}}>
        <Image source={BrandLogo} style={{width: 70, height: 70}}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingBottom: 20}}>
        <Text style={{fontSize: 26, fontWeight: '500', width: '100%'}}>Hello there!</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
        <Text style={{fontSize: 26, width: '100%'}}>Welcome</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingBottom: 20}}>
        <Text style={{width: '100%'}}>Signin to continue with your mobile number</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingBottom: 20}}>
        <InputBox placeholder="Enter your mobile number" inputStyle={{borderWidth: 1, borderColor: '#eee', borderRadius: 5, fontSize: 18}} keyboardType="number-pad"/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingBottom: 20}}>
        <Text style={{width: '100%'}}>A 4 digits OTP will be sent via SMS to verify your mobile number!</Text>
      </View>
      <TouchableOpacity onPress={() => navigate('App')}>
        <LinearGradient
          colors={['#348cea', '#81e2ea']}
          style={{ padding: 10, alignItems: 'center', borderRadius: 5, width: 220, marginTop: 20 }}
          start={[1, 0.1]}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
            }}>
            Sign In
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => state
// const mapDispatchToProps = dispatch => {
//   return {
//     add: () => {dispatch(addUser)},
//     get: () => dispatch(getUsers)
//   }
// }

export default connect(mapStateToProps)(Login);