import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Category} from './../../types';
import {getCategories, getProducts} from '../../reponsitories';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';

export interface CategoriesState {
  isLoading: boolean;
  categories?: Category[];
  error?: string;
}

const initialState: CategoriesState = {
  isLoading: false,
  categories: [],
};

export const fetchGetCategories = createAsyncThunk(
  'home/categories',
  async () => {
    const response = await getCategories();
    return response;
  },
);

export const categoiesState = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetCategories.fulfilled, (state, action) => {
        // If have errors will set error value and set arrivals is undefined
        if (action.payload.error) {
          state.categories = undefined;
          state.error = action.payload.error;
        }

        // If successfull will set arrivals value and set error is undefined
        if (action.payload.response) {
          state.categories = action.payload.response.data['data'];
          state.error = undefined;
        }
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/categories/pending'),
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher<RejectedAction>(
        action => action.type.endsWith('/categories/rejected'),
        (state, action) => {
          state.isLoading = false;
        },
      )
      .addMatcher<FulfilledAction>(
        action => action.type.endsWith('/categories/fulfilled'),
        (state, action) => {
          state.isLoading = false;
        },
      );
  },
});

export const {} = categoiesState.actions;
export default categoiesState.reducer;
