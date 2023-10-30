import {Product} from '../../types';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {productService} from '../../services';

export interface ProductState {
  isLoading: boolean;
  product?: Product;
  size?: number;
  error?: string;
}

const initialState: ProductState = {
  isLoading: false,
};

export const fetchGetProduct = createAsyncThunk('product', async (id: string) =>
  productService.getProduct(id),
);

export const productState = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    chooseProductSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGetProduct.fulfilled, (state, action) => {
        state.product = action.payload.data.data.data;
        state.size = 0;
        state.error = undefined;
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/product/pending'),
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher<RejectedAction>(
        action => action.type.endsWith('/product/rejected'),
        (state, action) => {
          state.error = 'Error in fetching product';
          state.product = undefined;
          state.isLoading = false;
        },
      )
      .addMatcher<FulfilledAction>(
        action => action.type.endsWith('/product/fulfilled'),
        (state, action) => {
          state.isLoading = false;
        },
      );
  },
});

export const {chooseProductSize} = productState.actions;
export default productState.reducer;
