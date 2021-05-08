import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuScreen } from './screens/MenuScreen';
import { OrdersScreen } from './screens/OrdersScreen';
import { BuildScreen } from './screens/BuildScreen';
import { OptionScreen } from './screens/OptionScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MenuNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Build" component={BuildScreen} />
    <Stack.Screen name="OptionScreen" component={OptionScreen} />
  </Stack.Navigator>
);

export const Navigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Menu" component={MenuNavigator} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
  </Tab.Navigator>
);
