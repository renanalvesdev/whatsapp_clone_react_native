import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {CenaPrincipalStack} from './components/Routes';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

class App extends Component {

  componentWillMount()
  {
    // Initialize Firebase
      let config = {
       apiKey: "AIzaSyAxxRUmHPQ4M0jz5g6VW9ElXrBpSVyDOic",
       authDomain: "whatsapp-clone-2c74b.firebaseapp.com",
       databaseURL: "https://whatsapp-clone-2c74b.firebaseio.com",
       projectId: "whatsapp-clone-2c74b",
       storageBucket: "whatsapp-clone-2c74b.appspot.com",
       messagingSenderId: "756213313477"
      };
      firebase.initializeApp(config);
  }


  render(){
    return(
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <CenaPrincipalStack/>
      </Provider>
    );
  }
}

export default App;
