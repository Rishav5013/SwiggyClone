import React, { Component } from 'react';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }}>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Otp}
          name="Otp"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
};

export default AuthStack;
