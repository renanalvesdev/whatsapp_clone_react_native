/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

//é um componente funcional pois não possui estados
  const whatsapp_clone = props => (
    <App/>
  );

AppRegistry.registerComponent('whatsapp_clone', () => whatsapp_clone);
