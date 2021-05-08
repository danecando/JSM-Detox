import React from 'react';
import { useImmerReducer } from 'use-immer';
import { generateId, createDate } from '../utils';
import menu from '../data/menu';

const OrdersContext = React.createContext();

function ordersReducer(state, action) {
  switch (action.type) {
    case 'add': {
      state.orders.unshift({
        id: generateId(),
        item: action.item,
        status: 'pending',
        total: action.price,
        size: action.size,
        date: createDate(),
      });
      break;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function OrdersProvider({ children }) {
  const [state, dispatch] = useImmerReducer(ordersReducer, {
    orders: [
      {
        id: generateId(),
        status: 'delivered',
        total: '$20.00',
        size: 'medium',
        date: createDate(),
        item: menu[0],
      },
    ],
  });
  const value = { state, dispatch };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
function useOrders() {
  const context = React.useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
export { OrdersProvider, useOrders };
