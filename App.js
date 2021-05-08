import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator';
import { OrdersProvider } from './src/context/orders';

const App = () => (
  <NavigationContainer>
    <OrdersProvider>
      <Navigator />
    </OrdersProvider>
  </NavigationContainer>
);

export default App;
