import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Image1 from "./../../../assets/images/test.jpg";
import CategoryCircle from '../../components/category-circle';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home(props) {
  let value=''
  const { navigate } = props.navigation;

  let item = (
    <TouchableOpacity onPress={() => navigate('ItemList')}>
      <ImageBackground source={Image1} imageStyle={{ borderRadius: 20 }} style={{width: 350, height: '100%', marginRight: 10, justifyContent: 'flex-end'}}>
        <View style={{backgroundColor: '#fff', paddingLeft: 15, paddingBottom: 10, paddingTop: 10, marginBottom: 10}}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>Chicken & Chicks</Text>
          <Text>Chicken & Chicks</Text>
          <Text>Chicken & Chicks</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
  let itemList = (
    <ScrollView horizontal={true}>
      {item}
      {item}
      {item}
      {item}
      {item}
    </ScrollView>
  )
  return (
    <View style={styles.container}>
      <View style={{flex:1, paddingTop: 5, paddingLeft: 20, paddingRight: 20, paddingBottom: 10}}>
        <TextInput
          style={{ height: 40, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomColor: '#eee', borderWidth: 1 }}
          placeholder='Search'
          inlineImageLeft='search_icon'
          value={value}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 5, paddingLeft: 20, paddingRight: 20, paddingBottom: 15}}>
        <CategoryCircle name={"hamburger"} navigate={navigate}/>
        <CategoryCircle name={"pizza-slice"} navigate={navigate}/>
        <CategoryCircle name={"rocket"} navigate={navigate}/>
        <CategoryCircle name={"rocket"} navigate={navigate}/>
        <CategoryCircle name={"rocket"} navigate={navigate}/>
      </View>
      <View style={{flex: 6, padding: 20}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Top Rated</Text>
        <Text style={{marginBottom: 10}}>Find out what people love</Text>
          {itemList}
      </View>
      <View style={{flex: 6, paddingLeft: 20, paddingTop: 5, paddingRight: 20, paddingBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Top Rated</Text>
        <Text style={{marginBottom: 10}}>Find out what people love</Text>
          {itemList}        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    marginTop:10
  },
});

Home.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 15}}>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <View style={{marginRight: 10}}>
          <Icon name="cart-plus" size={23} color="#fff" />
        </View>
      </TouchableOpacity>
      <View style={{marginLeft: 10}}>
        <Icon name="ellipsis-v" size={23} color="#fff" />
      </View>
    </View>
  )
})
