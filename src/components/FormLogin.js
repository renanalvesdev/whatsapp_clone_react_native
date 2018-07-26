import React, {Component} from 'react';
import {
  View ,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  ImageBackground } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha, autenticarUsuario} from '../actions/AutenticacaoActions';

  class formLogin extends Component {

    _autenticarUsuario() {
        const {email,senha, navigation} = this.props;
        this.props.autenticarUsuario({email,senha, navigation});
    }

    render(){

          return(

              <ImageBackground style={{flex:1, width: null}}  source={require('../imgs/bg.png')}>

                  <View style={{flex:1, padding: 10}}>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontSize: 25, color: '#00fff'}}>WhatsApp Clone</Text>
                    </View>

                    <View style={{flex:2}}>
                      <TextInput
                          value={this.props.email}
                          style={{fontSize: 20, height: 40}}
                          placeholder='E-mail'
                          placeholderTextColor='#fff'
                          onChangeText ={(texto) => this.props.modificaEmail(texto)}
                      />

                      <TextInput
                          value={this.props.senha}
                          secureTextEntry
                          style={{fontSize: 20, height: 40}}
                          placeholder='Senha'
                          placeholderTextColor='#fff'
                          onChangeText= {texto => this.props.modificaSenha(texto)}
                      />

                      <Text style={{color: '#ff0000', fontSize: 18}}>
                          {this.props.erroLogin}
                      </Text>


                      <TouchableHighlight  onPress={() => this.props.navigation.navigate('FormCadastro')}>
                      <Text style={{fontSize: 20, color: '#fff'}}> Ainda não tem acesso? Cadastre-se</Text>
                      </TouchableHighlight>
                    </View>

                    <View style={{flex: 2}}>
                      <Button
                          color='#115e54'
                          title='Acessar'
                          onPress= {() => this._autenticarUsuario()}/>
                    </View>
                  </View>

                </ImageBackground>
        );
      }
}

  const mapStateToProps = state => (
      {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin
      }
  );

  export default connect(mapStateToProps,{modificaEmail, modificaSenha, autenticarUsuario})(formLogin);
