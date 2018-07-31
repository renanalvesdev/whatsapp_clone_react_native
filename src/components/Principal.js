
import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import TabBarMenu from './TabBarMenu';
import Contatos from './Contatos';
import Conversas from './Conversas';

export default createMaterialTopTabNavigator({
      Contatos: Contatos,
      Conversas: Conversas,
  },
  {
      tabBarOptions:
      {
          style: {
            elevation: 4,
            marginBottom: 6,
            backgroundColor: '#115e54',
          },
      }
  }

);
