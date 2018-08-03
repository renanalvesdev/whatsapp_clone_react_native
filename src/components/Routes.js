import React from 'react';
import {StackNavigator} from 'react-navigation';
import FormCadastro from './FormCadastro';
import FormLogin from './FormLogin';
import BoasVindas from './BoasVindas';
import AdicionarContato from './AdicionarContato';
import Principal from './Principal';
import TabBarMenu from './TabBarMenu';

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
        //screen Principal é uma tab navigation
        screen: Principal,
        navigationOptions: (navigation) => (
          {
            headerStyle: {
              backgroundColor: '#115e54'
            },
            headerTitle: <TabBarMenu navigation={navigation}/>
          }
        )
      },

      AdicionarContato: {
        screen: AdicionarContato,
        navigationOptions: {
          title: 'Adicionar Contato'
        }
      }

    },

    {
      initialRouteName: 'FormLogin',
      navigationOptions:
      {
        headerStyle: {backgroundColor: '#115e54',},
        headerTintColor: '#fff',

      }

    }

  );
