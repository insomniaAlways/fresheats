import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfilePic from '../../../assets/images/profile-pic.jpg'
import { Accordion } from 'native-base';
import AddressCard from '../../components/addressCard';
import PaymentOptions from '../../components/paymentOptions';
import { connect } from 'react-redux';
import { set_authentication } from '../../store/actions/authentications';

function User(props) {
  const accordionArray = [{ title: 'Address' },{ title: 'Payment Options' }]
  const accordionContent = item => {
    let content = '';
    if(item.title === 'Address') {
      content = (
        <View>
          <AddressCard />
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </View>
      )
    } else if (item.title === 'Payment Options') {
      content = <PaymentOptions />
    }
    return content
  }

  const logout = async () => {
    props.setAuthentication(false)
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  }

  const accordionHeader = (item, expanded) => {
    return (
    <View style={[styles.alignRow, styles.menus]}>
      <Text style={{fontSize: 16, width:'100%'}}>{item.title}</Text>
      {expanded
          ? <Icon name="angle-down" size={13} color="#47d9a8" />
          : <Icon name="angle-right" size={13} color="#47d9a8" />}
    </View>
  )}

  return (
    <View style={{flex: 1, backgroundColor: '#47d9a8'}}>
      <View style={{backgroundColor: '#47d9a8', flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
      </View>
      <View style={{flex: 5, backgroundColor: '#fff', paddingLeft: 20, paddingRight: 20}}>
        <View style={{flex: 1, backgroundColor: '#fff', borderTopEndRadius: 10, borderTopStartRadius: 10, top: '-14%'}}>
          <View style={{justifyContent: 'center', flexDirection: 'row', top: -50}}>
            <Image
              style={styles.image}
              source={ProfilePic}
            />
          </View>
          <View style={[styles.nameBlock, {width: '100%', flex: 1}]}>
            <Text style={{fontSize: 20, fontWeight: '500', width: '100%', textAlign: 'center'}}>Kim Khong</Text>
            <Text style={{fontSize: 16, width: '100%', textAlign: 'center'}}>kim.khong@gmail.com</Text>
          </View>
          <View style={{flex: 9}}>
            <ScrollView>
              <Accordion
                dataArray={accordionArray}
                animation={true}
                expanded={true}
                renderHeader={accordionHeader}
                renderContent={accordionContent}
                style={{borderColor: null, borderWidth: 0}}
              />
              <TouchableOpacity onPress={() => logout()}>
                <View style={[styles.alignRow, styles.menus]}>
                  <Text style={{fontSize: 16}}>Log out</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  alignRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  nameBlock: {
    top: -30
  },
  menus: {
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'black',
  },
  image: {
    borderWidth: 3,
    borderRadius: 50,
    width: 100,
    height: 100,
    borderColor: '#fff',
  }
});

User.navigationOptions = ({ navigation }) => ({
  title: 'Profile',
  headerStyle: {
    backgroundColor: '#47d9a8',
    elevation: 0
  },
  headerRight: (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 15}}>
      <View style={{marginRight: 10}}>
        <Icon name="search" size={23} color="#fff" />
      </View>
      <View style={{marginLeft: 10}}>
        <Icon name="ellipsis-v" size={23} color="#fff" />
      </View>
    </View>
  )
})
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
  return {
    setAuthentication: (isAuthenticated) => dispatch(set_authentication(isAuthenticated))    
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);