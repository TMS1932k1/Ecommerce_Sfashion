import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Order} from '../../types';

export interface CartState {
  orders: Order[];
  sum: number;
}

const initialState: CartState = {
  orders: [],
  sum: 0,
};

function sumOrder(orders: Order[]): number {
  var sum = 0;
  orders.map(item => {
    sum += item.product.price * item.amount;
  });
  return sum;
}

export const cartState = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders = [action.payload, ...state.orders];
      state.sum = sumOrder(state.orders);
    },
  },
});

export const {addOrder} = cartState.actions;
export default cartState.reducer;
