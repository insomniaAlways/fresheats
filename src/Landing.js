import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import Image1 from "./../assets/images/test.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.image}
          source={Image1}
      />
      <ImageBackground source={Image1} style={styles.image}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '70%', height: '90%', justifyContent: 'center', backgroundColor: 'white'}}>
            <Text style={{fontSize: 20, fontWeight: '400' ,color: 'black', textAlign: 'center'}}>Fresh Food Items</Text>
            <View style={{marginBottom: 20, marginTop: 20}}>
              <Text style={{fontSize: 40, fontWeight: '700' ,color: 'black', textAlign: 'center'}}>FRESHEATS</Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: '500' ,color: 'black', textAlign: 'center'}}>AT YOUR DOORTEP</Text>
          </View>
        </View>
      </ImageBackground>
      <Image
        style={styles.image}
        source={Image1}
      />
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
    marginTop:24
  },
  
});
