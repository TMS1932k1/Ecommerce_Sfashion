import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Product, TypeCollection} from './../../types';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {productsService} from '../../services';

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
  async (typeCollection: TypeCollection) => {
    if (typeCollection === TypeCollection.TREND) {
      return productsService.getTrend();
    } else if (typeCollection === TypeCollection.SALE) {
      return productsService.getSale();
    } else {
      return productsService.getHot();
    }
  },
);

export const collectionsState = createSlice({
  name: 'collections',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetCollection.fulfilled, (state, action) => {
        state.collections = action.payload.data.data.data.splice(0, 6);
        state.error = undefined;
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
          state.error = 'Fetch error in loading collections';
          state.collections = undefined;
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
