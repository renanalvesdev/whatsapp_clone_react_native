import React from 'react';
import{
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';
import {modificaAdicionaContatoEmail, adicionaContato} from '../actions/AppActions';

class AdicionarContato extends React.Component
{

      renderAdicionaContato() {
        if(this.props.cadastro_contato_resultado)
        {
          return(
            <View>
              <Text style={{fontSize: 20}}>Cadastro Realizado com sucesso !</Text>
            </View>
          );

        }

        else
        {
          return(
            <View style={{flex: 1, justifyContent: 'center', padding: 20}}>

                  <View style={{flex: 1, justifyContent: 'center'}}>
                        <TextInput
                            placeholder="E-mail"
                            style={{fontSize: 20, height: 45}}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            value={this.props.adiciona_contato_email}
                        />
                  </View>

                  <View style={{flex: 1}}>
                        <Button
                            title="Adicionar"
                            color="#115e54"
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}/>

                        <Text style={{color: '#ff0000', fontSize: 20}}>
                            {this.props.cadastro_resultado_txt_erro}
                        </Text>
                  </View>

            </View>
          );
        }

      }

      render()
      {
        return(
          <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
            {this.renderAdicionaContato()}
          </View>
        );
      }



}


const mapStateToProps = state =>  (
  {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
    cadastro_contato_resultado: state.AppReducer.cadastro_contato_resultado
  }
)

//variaveis de estado do redux são recebidas como props no componente
export default connect(mapStateToProps, {modificaAdicionaContatoEmail, adicionaContato})(AdicionarContato);
