import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import ProfilePic from '../../assets/images/profile-pic.jpg';

function DrawerView(props) {
  let { navigate } = props.navigation
  return (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={{backgroundColor: '#6179ff'}}>
        <View style={styles.profileBlock}>
          <View>
            <Image
              style={styles.image}
              source={ProfilePic}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: '500', width: '100%'}}>Kim Khong</Text>
            <Text style={{fontSize: 18, width: '100%'}}>kim.khong@gmail.com</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigate('User')}>
        <View style={[styles.alignRow, styles.menus, {paddingTop: 20}]}>
          <Text style={{fontSize: 16}}>Account Setting</Text>
          <Icon name="angle-right" size={13} color="#47d9a8" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('My Orders')}>
        <View style={[styles.alignRow, styles.menus]}>
          <Text style={{fontSize: 16}}>My Orders</Text>
          <Icon name="angle-right" size={13} color="#47d9a8" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Help')}>
        <View style={[styles.alignRow, styles.menus]}>
          <Text style={{fontSize: 16}}>Help</Text>
          <Icon name="angle-right" size={13} color="#47d9a8" />
        </View>
      </TouchableOpacity>
      {/* <DrawerNavigatorItems {...props} /> */}
    </SafeAreaView>
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileBlock: {
    height: 150,
    borderBottomColor: '#47d9a8',
    borderBottomWidth: 1,
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 10,
    borderTopRightRadius: 100,
    backgroundColor: '#5bf0f5'
  },
  alignRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  nameBlock: {
    top: -30
  },
  menus: {
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    borderWidth: 3,
    borderRadius: 50,
    width: 60,
    height: 60,
    // top: -50,
    borderColor: '#fff',
    // shadowColor: 'black',
    // shadowOffset : { width: 100, height: 100 },
    // shadowRadius : 2
    // shadowOffset: { width: 5, height: 5 },
    // shadowColor: "grey",
    // shadowOpacity: 1,
    // shadowRadius: 10,
  },
});

export default DrawerView;