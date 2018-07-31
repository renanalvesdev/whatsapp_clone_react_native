import firebase from 'firebase';
import b64 from 'base-64';
import {
   MODIFICA_NOME,
   MODIFICA_EMAIL,
   MODIFICA_SENHA,
   CADASTRO_USUARIO_ERRO,
   CADASTRO_USUARIO_SUCESSO,
   LOGIN_USUARIO_ERRO,
   LOGIN_USUARIO_SUCESSO,
   LOGIN_EM_ANDAMENTO,
   CADASTRO_EM_ANDAMENTO

} from './types.js';
//Assinatura: Action | Conteudo: Action Creator
export const modificaEmail = (texto) => {
  return {
    type: MODIFICA_EMAIL,
    //informações que irão fazer os estados evoluirem
    payload: texto
  }
}
//realiza o dispach
export const modificaSenha = (texto) => {
  return {
    type: MODIFICA_SENHA,
    payload: texto
  }
}

export const modificaNome =  (texto) => {
  return {
    type:MODIFICA_NOME,
    payload: texto
  }
}
  export const cadastraUsuario = ({nome,email,senha, navigation}) => {

    return dispatch => {

      dispatch({type: CADASTRO_EM_ANDAMENTO});

      firebase.auth().createUserWithEmailAndPassword(email,senha)
        .then(user => {
            let emailB64 = b64.encode(email);

             firebase.database().ref(`/contatos/${emailB64}`)
               .push({nome})
               .then(value => cadastroUsuarioSucesso(dispatch, navigation) )
        })
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    //essa função não é realizada de forma síncrona; o retorno da action é feito antes que a função de criar usuario termine


  }

  const cadastroUsuarioSucesso = (dispatch, navigation) => {
    dispatch ({type: CADASTRO_USUARIO_SUCESSO});
    navigation.navigate('BoasVindas');
  }

  const cadastroUsuarioErro = (erro, dispatch) => {

    dispatch ( {type: CADASTRO_USUARIO_ERRO, payload: erro.message } );
  }

  export const autenticarUsuario = ({email,senha, navigation}) => {
    return dispatch => {

      dispatch({type: LOGIN_EM_ANDAMENTO});

      firebase.auth().signInWithEmailAndPassword(email,senha)
        .then(value => loginUsuarioSucesso(navigation,dispatch))
        .catch(erro => loginUsuarioErro(erro, dispatch));
    }

  }

  const loginUsuarioSucesso = (navigation,dispatch) => {
    dispatch(
      {
        type: LOGIN_USUARIO_SUCESSO
      }
    );

    navigation.navigate('Principal');
  }

  const loginUsuarioErro = (erro, dispatch) => {
    dispatch(
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
      );
  }
