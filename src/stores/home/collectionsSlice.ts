import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './../../types';
import {getProducts} from '../../reponsitories';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';

export interface CollectionsState {
  isLoading: boolean;
  collections?: Product[];
  error?: string;
}

const initialState: CollectionsState = {
  isLoading: false,
  collections: [],
};

export const fetchGetCollection = createAsyncThunk(
  'home/collections',
  async (path: string) => {
    const response = await getProducts(path);
    return response;
  },
);

export const collectionsState = createSlice({
  name: 'collections',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetCollection.fulfilled, (state, action) => {
        // If have errors will set error value and set collection is undefined
        if (action.payload.error) {
          state.collections = undefined;
          state.error = action.payload.error;
        }

        // If successfull will set collection value and set error is undefined
        if (action.payload.response) {
          state.collections = action.payload.response.data['data'].splice(0, 6);
          state.error = undefined;
        }
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/collections/pending'),
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher<RejectedAction>(
        action => action.type.endsWith('/collections/rejected'),
        (state, action) => {
          state.isLoading = false;
        },
      )
      .addMatcher<FulfilledAction>(
        action => action.type.endsWith('/collections/fulfilled'),
        (state, action) => {
          state.isLoading = false;
        },
      );
  },
});

export const {} = collectionsState.actions;
export default collectionsState.reducer;
