import React, {Component} from 'react';
import{
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {modificaMensagem, enviarMensagem} from '../actions/AppActions';
import {connect} from 'react-redux';


class Conversa extends Component {

  _enviarMensagem(){
    console.log('ola')
    const mensagem = this.props.mensagem,
    contatoNome = this.props.navigation.getParam('contatoNome'),
    contatoEmail = this.props.navigation.getParam('contatoEmail');

    this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
  }


  render(){

      //this.props.navigation.setParams({ title:
      console.log(this.props.navigation)// })

    return(
          <View style={{flex: 1, backgroundColor: '#ddd0c5'}}>

              <View style={{flex: 1, padding: 20}}></View>

              <View style={{flexDirection: 'row', height: 60, padding: 10}}>

                  <TextInput
                      value={this.props.mensagem}
                      onChangeText={texto => this.props.modificaMensagem(texto)}
                      style={{flex: 4, backgroundColor: '#fff', fontSize: 18, borderRadius: 20}}
                  />
                  <TouchableHighlight onPress={() => this._enviarMensagem()}  underlayColor="#ffff">
                        <Icon name='send' size={40} color="#115e54"/>
                  </TouchableHighlight>

              </View>

          </View>
    );
  }
}

mapStateToProps = state => {
  return({
      mensagem: state.AppReducer.mensagem
  })
}

export default connect(mapStateToProps, {modificaMensagem, enviarMensagem})(Conversa)
