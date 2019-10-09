import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BrandLogo from '../../../assets/brand_icon/logo_48.png';
import InputBox from '../../components/inputBox';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import { validate_authentication, check_authentication } from '../../store/actions/authentications';

function Login(props) {
  let { navigate } = props.navigation;
  let { isAuthenticated } = props.authValidation
  let [phoneNumber, getPhoneNumber] = useState(props.phoneNumber)

  useEffect(() => {
    if(isAuthenticated) {
      navigate('App')
    }
  }, [isAuthenticated])

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
        <InputBox
          placeholder="Enter your mobile number"
          inputStyle={{borderWidth: 1, borderColor: '#eee', borderRadius: 5, fontSize: 18}}
          getValue={getPhoneNumber}
          keyboardType="number-pad"/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingBottom: 20}}>
        <Text style={{width: '100%'}}>A 4 digits OTP will be sent via SMS to verify your mobile number!</Text>
      </View>
      <TouchableOpacity onPress={() => props.validateUser({phoneNumber: phoneNumber})}>
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
const mapDispatchToProps = dispatch => {
  return {
    validateUser: (authData) => dispatch(validate_authentication(authData)),
    checkAuth: () => dispatch(check_authentication)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);