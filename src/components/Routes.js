import React from 'react';
import {StackNavigator} from 'react-navigation';
import FormCadastro from './FormCadastro';
import FormLogin from './FormLogin';
import BoasVindas from './BoasVindas';

  export const CenaPrincipalStack = StackNavigator(
    {
      BoasVindas: {
          screen: BoasVindas,
          navigationOptions:{
            title: 'Boas Vindas'
          }
      },


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
      initialRouteName: 'BoasVindas',

      navigationOptions:
      {headerTitleStyle :{textAlign: 'center',alignSelf:'center'},

     },

    }




  );
