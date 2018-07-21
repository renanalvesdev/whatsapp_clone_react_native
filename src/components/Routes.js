import React from 'react';
import {StackNavigator} from 'react-navigation';
import FormCadastro from './FormCadastro';
import FormLogin from './FormLogin';

  export const CenaPrincipalStack = StackNavigator(

    {
      FormLogin:
      {
        screen: FormLogin, //screen,

        navigationOptions:
        {
          title: 'Login'
        }
      },

      FormCadastro:
      {
        screen: FormCadastro, // screen

        navigationOptions:
        {
          title:'Cadastro'
        }
      }
    },

    {
      initialRouteName: 'FormLogin',

      navigationOptions:
      {headerTitleStyle :{textAlign: 'center',alignSelf:'center'},

     },
    }




  );
