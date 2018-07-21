import firebase from 'firebase';

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
  export const cadastraUsuario = ({nome,email,senha}) => {

    return dispatch => {
      firebase.auth().createUserWithEmailAndPassword(email,senha)
      .then(user => cadastroUsuarioSucesso(dispatch))
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    //essa função não é realizada de forma síncrona; o retorno da action é feito antes que a função de criar usuario termine


  }

  const cadastroUsuarioSucesso = (dispatch) => {

    dispatch ({type: 'sucesso'});
  }

  const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ({type: 'erro'});
  }
