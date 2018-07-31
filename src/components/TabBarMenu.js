import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default props =>
(

  <View style={{flex: 1}}>
    <StatusBar backgroundColor="#114d44"/>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
        <View>
          <Text style={{color:"#fff", fontSize: 20, marginLeft: 20}}>Whatsapp Clone !</Text>
        </View>

        <View style={{flexDirection:'row', marginRight: 20, }}>
          <View style={{width: 50, justifyContent: 'center'}}>
            <Icon name="person-add" size={25} color="#fff"/>
          </View>
          <View>
            <Text style={{fontSize: 20, color: '#fff', justifyContent: 'center'}}>Sair</Text>
          </View>

        </View>
    </View>
  </View>


);
