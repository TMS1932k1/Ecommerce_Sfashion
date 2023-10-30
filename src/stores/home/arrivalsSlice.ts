import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './../../types';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {productsService} from '../../services';

export interface ArrivalsState {
  isLoading: boolean;
  arrivals?: Product[];
  error?: string;
}

const initialState: ArrivalsState = {
  isLoading: false,
  arrivals: [],
};

export const fetchGetArrival = createAsyncThunk('home/arrivals', async () =>
  productsService.getArrival(),
);

export const arrivalsState = createSlice({
  name: 'arrivals',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetArrival.fulfilled, (state, action) => {
        state.arrivals = action.payload.data.data.data.splice(0, 6);
        state.error = undefined;
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
          state.error = 'Error in fetching arrivals';
          state.arrivals = undefined;
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
