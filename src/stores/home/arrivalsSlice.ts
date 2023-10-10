import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './../../types';
import {getProducts} from '../../reponsitories';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';

export interface ArrivalsState {
  isLoading: boolean;
  arrivals?: Product[];
  error?: string;
}

const initialState: ArrivalsState = {
  isLoading: false,
  arrivals: [],
};

export const fetchGetArrival = createAsyncThunk(
  'home/arrivals',
  async (path: string) => {
    const response = await getProducts(path);
    return response;
  },
);

export const arrivalsState = createSlice({
  name: 'arrivals',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetArrival.fulfilled, (state, action) => {
        // If have errors will set error value and set arrivals is undefined
        if (action.payload.error) {
          state.arrivals = undefined;
          state.error = action.payload.error;
        }

        // If successfull will set arrivals value and set error is undefined
        if (action.payload.response) {
          state.arrivals = action.payload.response.data['data'].splice(0, 10);
          state.error = undefined;
        }
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/arrivals/pending'),
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher<RejectedAction>(
        action => action.type.endsWith('/arrivals/rejected'),
        (state, action) => {
          state.isLoading = false;
        },
      )
      .addMatcher<FulfilledAction>(
        action => action.type.endsWith('/arrivals/fulfilled'),
        (state, action) => {
          state.isLoading = false;
        },
      );
  },
});

export const {} = arrivalsState.actions;
export default arrivalsState.reducer;
