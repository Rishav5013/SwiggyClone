import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Address from '../screens/Address';
import Setting from '../screens/Setting';
import ResDetail from '../screens/ResDetail';
import PayScreen from '../screens/PayScreen';

const HomeStack = () => {
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
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Address}
        name="Address"
        options={{
          headerShown: true,
          headerBackTitleVisible: true,
          headerTitle: 'Enter your area or apartment name',
        }}
      />
      <Stack.Screen
        component={Setting}
        name="Setting"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={ResDetail}
        name="ResDetail"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={PayScreen}
        name="PayScreen"
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
