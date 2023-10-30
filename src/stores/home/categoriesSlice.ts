import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Category} from './../../types';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {categoriesService} from '../../services';

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
  async () => categoriesService.getProduct(),
);

export const categoiesState = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data.data.data;
        state.error = undefined;
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
          state.categories = undefined;
          state.error = 'Error in fetching categories';
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
