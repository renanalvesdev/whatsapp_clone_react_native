 import React, {Component} from 'react';
import{
  View,
  Text,
  Button,
  ListView,
  TouchableHighlight

} from 'react-native';
import {connect} from 'react-redux';
import {contatosUsuarioFetch} from '../actions/AppActions';
import _ from 'lodash';

class Contatos extends Component {

    constructor(props){
        super(props)
    }


    componentWillMount(){
      this.props.contatosUsuarioFetch();
      this.criaFonteDeDados(this.props.contatos)
    }

    //método de ciclo de vida que é executado sempre que as propriedades são modificadas
    componentWillReceiveProps(nextProps){
      
          this.criaFonteDeDados(nextProps.contatos)
          //console.log('recuperado via props após update', nextProps.contatos)
    }

    criaFonteDeDados(contatos) {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contato){
      return(
        <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Conversa', {
                contatoNome: contato.nome,
                contatoEmail: contato.email}) }>
                    <View style={{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#ccc"}}>
                        <Text style={{fontSize: 25}}>{contato.nome}</Text>
                        <Text style={{fontSize: 18}}>{contato.email}</Text>
                    </View>
        </TouchableHighlight>
      )

    }

    render(){
        return(
          <ListView
              dataSource={this.fonteDeDados}
              renderRow={
                data => this.renderRow(data)
              }
          />
        );
    }

}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return {...val, uid}
    })

    return{contatos}
}

export default connect(mapStateToProps,{contatosUsuarioFetch})(Contatos);
