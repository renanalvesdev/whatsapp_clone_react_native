import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground
} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail, modificaSenha, modificaNome, cadastraUsuario} from '../actions/AutenticacaoActions';


class formCadastro extends Component {

        _cadastraUsuario()
        {
          const {nome,email,senha} = this.props;

          this.props.cadastraUsuario({nome,email,senha});
        }

        render()
        {

          return( <ImageBackground source={require('../imgs/bg.png')} style={{flex:1, width:null}}>
              <View style={{flex:1, padding: 10}}>

                <View style={{flex:4, justifyContent: 'center'}}>
                  <TextInput
                      value={this.props.nome}
                      style={{fontSize: 20, borderColor: 'black', borderWidth: 1}}
                      placeholder='Nome'
                      placeholderTextColor='#fff'
                      underlineColor='black'
                      onChangeText = {(texto) => this.props.modificaNome(texto)}/>

                  <TextInput
                      value={this.props.email}
                      style={{fontSize: 20, borderColor: 'black', borderWidth: 1}}
                      placeholder='E-mail'
                      placeholderTextColor='#fff'
                      onChangeText = {(texto) => this.props.modificaEmail(texto)}/>

                  <TextInput
                      value={this.props.senha}
                      style={{fontSize: 20,  borderColor: 'black', borderWidth: 1}}
                      placeholder='Senha'
                      placeholderTextColor='#fff'onChangeText ={(texto) => this.props.modificaSenha(texto)}/>
                </View>

                <View style={{flex:1}}>
                  <Button style={{fontSize: 20}} color='#115e54' title='Cadastrar' onPress={() => this._cadastraUsuario()}/>
                </View>
              </View>
            </ImageBackground>

          );
        }
}



const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, {modificaEmail,modificaSenha, modificaNome, cadastraUsuario})(formCadastro)
