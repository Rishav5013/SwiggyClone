import React, {Component} from 'react';
import HomeStack from './src/navigation/HomeStack';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

import Home from './src/screens/Home';
import ResDetail from './src/screens/ResDetail';
import MenuItem from './src/components/MenuItem';
import PriceCard from './src/components/PriceCard';
import PayScreen from './src/screens/PayScreen';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <AppStack />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
