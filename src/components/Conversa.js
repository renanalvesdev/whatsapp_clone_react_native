import React, {Component} from 'react';
import{
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {modificaMensagem, enviarMensagem, conversaUsuarioFetch} from '../actions/AppActions';
import {connect} from 'react-redux';
import _ from 'lodash';


class Conversa extends Component {


  componentWillMount(){
    this.props.conversaUsuarioFetch(this.props.navigation.getParam('contatoEmail'))
    this.criaFonteDeDados(this.props.conversa);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.contatoEmail != nextProps.contatoEmail){
          this.props.conversaUsuarioFetch(nextProps.contatoEmail)
    }
    this.criaFonteDeDados(nextProps.conversa);
  }

  criaFonteDeDados(conversa){
    const ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(conversa);
  }
  _enviarMensagem(){
    console.log('ola')
    const mensagem = this.props.mensagem,
    contatoNome = this.props.navigation.getParam('contatoNome'),
    contatoEmail = this.props.navigation.getParam('contatoEmail');

    this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)

  }

  renderRow(texto){

        if(texto.tipo === 'e'){
            return(
              <View style={{alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40}}>
                  <Text style={{fontSize: 18, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1}}>{texto.mensagem}</Text>
              </View>)
        }

        return(
          <View style={{alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40}}>
              <Text style={{fontSize: 18, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1}}>{texto.mensagem}</Text>
          </View>
        )

  }

  render(){

      //this.props.navigation.setParams({ title:
      console.log(this.props.navigation)// })

    return(
          <View style={{flex: 1, backgroundColor: '#ddd0c5'}}>

              <View style={{flex: 1, padding: 20}}>
                <ListView
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />

              </View>

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
  //convertendo o objeto para array através do lodash
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
      return {...val, uid};
  })

  return({
      conversa: conversa,
      mensagem: state.AppReducer.mensagem
  })
}

export default connect(mapStateToProps, {modificaMensagem, enviarMensagem, conversaUsuarioFetch})(Conversa)
