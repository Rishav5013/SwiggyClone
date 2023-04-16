import React, {Component} from 'react';
import HomeStack from './HomeStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = () => {
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
        component={HomeStack}
        name="HomeStack"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
