import React from 'react';
import {
  View,
  ImageBackground,
  Button,
  Text,
  Image
} from 'react-native';


export default props => {

  return(
    <ImageBackground style={{flex:1, width: null}} source={require('../imgs/bg.png')}>
        <View style={{flex:1, padding: 15}}>
          <View style={{flex:3, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: '#ffff', fontWeight: 'bold'}}>Seja bem-vindo !</Text>
            <Image source={require('../imgs/logo.png')}/>
          </View>
          <View style={{flex:2}}>
            <Button title='Fazer Login' onPress = {() => props.navigation.navigate('FormLogin')}/>
          </View>
        </View>
    </ImageBackground>
  );
}
