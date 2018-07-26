import React from 'react';
import {StackNavigator} from 'react-navigation';
import FormCadastro from './FormCadastro';
import FormLogin from './FormLogin';
import BoasVindas from './BoasVindas';
import Principal from './Principal';

  export const CenaPrincipalStack = StackNavigator(
    {
      BoasVindas: {
          screen: BoasVindas,
          navigationOptions:{
            title: 'Boas Vindas',
            header: null
          }
      },


      FormLogin:
      {
        screen: FormLogin, //screen,
        navigationOptions: {
          title: 'Login',
          header: null
        }
      },

      FormCadastro:
      {
        screen: FormCadastro, // screen
        navigationOptions: {
          title:'Cadastro',
        }
      },

      Principal:
      {
        screen: Principal,
        navigationOptions:{
          title: 'Principal',
          header: null
        }
      }

    },

    {
      initialRouteName: 'BoasVindas',
      navigationOptions:
      {
        headerStyle: {backgroundColor: '#115e54',},
        headerTintColor: '#fff',

      }

    }




  );
