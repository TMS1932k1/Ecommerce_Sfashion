import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {Review} from '../../types';
import {productService} from '../../services';

export interface ReviewsState {
  isLoading: boolean;
  reviews?: Review[];
  error?: string;
}

const initialState: ReviewsState = {
  isLoading: false,
  reviews: undefined,
};

export const fetchGetReviews = createAsyncThunk('reviews', async (id: string) =>
  productService.getReviews(id),
);

export const reviewsState = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetReviews.fulfilled, (state, action) => {
        state.reviews = action.payload.data.data.data;
        state.error = undefined;
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/reviews/pending'),
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher<RejectedAction>(
        action => action.type.endsWith('/reviews/rejected'),
        (state, action) => {
          state.reviews = undefined;
          state.error = 'Error in fetching reviews';
          state.isLoading = false;
        },
      )
      .addMatcher<FulfilledAction>(
        action => action.type.endsWith('/reviews/fulfilled'),
        (state, action) => {
          state.isLoading = false;
        },
      );
  },
});

export const {} = reviewsState.actions;
export default reviewsState.reducer;
