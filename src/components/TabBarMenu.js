import React from 'react';
import {View, Text, StatusBar, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {habilitaInclusaoContato} from '../actions/AppActions';



 class TabBarMenu extends React.Component
 {

   render()
   {
       return (
         <View style={{flex: 1}}>
           <StatusBar backgroundColor="#114d44"/>
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
               <View>
                 <Text style={{color:"#fff", fontSize: 20, marginLeft: 20}}>Whatsapp Clone !</Text>
               </View>

               <View style={{flexDirection:'row', marginRight: 20, }}>
                 <View style={{width: 50, justifyContent: 'center', alignItems: 'center'}}>
                   <TouchableHighlight
                       onPress={() => {
                         console.log(this.props);
                         this.props.habilitaInclusaoContato();
                         this.props.navigation.navigation.navigate('AdicionarContato');
                       }}

                       underlayColor = "#114d44">
                     <Icon name="person-add" size={25} color="#fff"/>
                   </TouchableHighlight>
                 </View>
                 <View>
                   <Text style={{fontSize: 20, color: '#fff', justifyContent: 'center'}}>Sair</Text>
                 </View>

               </View>
           </View>
         </View>
       );
   }

 }

export default connect(null, {habilitaInclusaoContato})(TabBarMenu);

//export default withNavigation(TabBarMenu);
