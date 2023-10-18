import {Product} from '../../types';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {getProduct} from '../../reponsitories';

export interface ProductState {
  isLoading: boolean;
  product?: Product;
  error?: string;
}

const initialState: ProductState = {
  isLoading: false,
};

export const fetchGetProduct = createAsyncThunk(
  'product',
  async (id: string) => {
    const response = await getProduct(id);

    return response;
  },
);

export const productState = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetProduct.fulfilled, (state, action) => {
        // If have errors will set error value and set product is undefined
        if (action.payload.error) {
          state.product = undefined;
          state.error = action.payload.error;
        }

        // If successfull will set product value and set error is undefined
        if (action.payload.response) {
          state.product = action.payload.response.data['data'];
          state.error = undefined;
        }
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

export const {} = productState.actions;
export default productState.reducer;
