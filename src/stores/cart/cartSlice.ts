import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Order} from '../../types';
import {showToast} from '../../utils';
import {readCart, saveCart} from '../../reponsitories';

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

function getOrder(orders: Order[], orderFind: Order): Order | undefined {
  // Find order in list
  return orders.find(
    order =>
      order.product.id === orderFind.product.id &&
      order.size === orderFind.size,
  );
}

export const readCartStorage = createAsyncThunk('cart/read', async () => {
  return await readCart();
});

export const cartState = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      const findOrder = getOrder(state.orders, action.payload);

      // If have will increase order's amount
      if (findOrder) {
        state.orders[state.orders.indexOf(findOrder!)].amount +=
          findOrder.amount; // Inscrease amount
      } else {
        if (state.orders.length >= 5) {
          showToast('Your cart is full, max is 5 orders');
          return;
        } else {
          state.orders = [action.payload, ...state.orders]; // Add new order
        }
      }

      state.sum = sumOrder(state.orders);
      saveCart(state.orders);
    },
    increaseAmountOrder: (state, action: PayloadAction<Order>) => {
      const findOrder = getOrder(state.orders, action.payload);

      if (findOrder!.amount >= 5) {
        showToast('Max amount is 5');
      } else {
        const index = state.orders.indexOf(findOrder!);
        state.orders[index].amount += 1; // Inscrease amount
        state.sum = sumOrder(state.orders);
        saveCart(state.orders);
      }
    },
    descreaseAmountOrder: (state, action: PayloadAction<Order>) => {
      const findOrder = getOrder(state.orders, action.payload);

      const index = state.orders.indexOf(findOrder!);
      // If current amount less than 1, will show dialog to remove order
      if (findOrder!.amount <= 1) {
        state.orders.splice(index, 1); // Remove order
      } else {
        state.orders[index].amount -= 1; // Descrease amount
      }
      state.sum = sumOrder(state.orders);
      saveCart(state.orders);
    },
  },
  extraReducers(build) {
    build.addCase(readCartStorage.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.sum = sumOrder(state.orders);
    });
  },
});

export const {addOrder, increaseAmountOrder, descreaseAmountOrder} =
  cartState.actions;
export default cartState.reducer;
