import firebase from 'firebase';
import b64 from 'base-64'
//Assinatura: Action | Conteudo: Action Creator
export const modificaEmail = (texto) => {
  return {
    type: 'modifica_email',

    //informações que irão fazer os estados evoluirem
    payload: texto
  }
}
//realiza o dispach
export const modificaSenha = (texto) => {
  return {
    type: 'modifica_senha',
    payload: texto
  }
}

export const modificaNome =  (texto) => {
  return {
    type:'modifica_nome',
    payload: texto
  }
}
  export const cadastraUsuario = ({nome,email,senha, navigation}) => {

    return dispatch => {
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
    dispatch ({type: 'cadastro_usuario_sucesso'});
    navigation.navigate('BoasVindas');
  }

  const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ( {type: 'cadastro_usuario_erro', payload: erro.message } );
  }

  export const autenticarUsuario = ({email,senha, navigation}) => {
    return dispatch => {
      firebase.auth().signInWithEmailAndPassword(email,senha)
        .then(value => loginUsuarioSucesso(navigation,dispatch))
        .catch(erro => loginUsuarioErro(erro, dispatch));
    }

  }

  const loginUsuarioSucesso = (navigation,dispatch) => {
    dispatch(
      {
        type: 'login_usuario_sucesso'
      }
    );

    navigation.navigate('Principal');
  }

  const loginUsuarioErro = (erro, dispatch) => {
    dispatch(
        {
            type: 'login_usuario_erro',
            payload: erro.message
        }
      );
  }
