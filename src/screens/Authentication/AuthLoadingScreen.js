import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  AsyncStorage
} from 'react-native';
import { check_authentication, set_authentication } from '../../store/actions/authentications'
import { connect } from 'react-redux';

function AuthLoadingScreen (props){
  let { navigate } = props.navigation;
  useEffect(() => {
    _bootstrapAsync()
  })

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigate(userToken ? 'App' : 'Auth');
    props.setAuthentication(userToken ? true : false )
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  )
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(check_authentication),
    setAuthentication: () => dispatch(set_authentication)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);