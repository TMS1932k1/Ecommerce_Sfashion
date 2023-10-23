import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getReviews} from '../../reponsitories';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {Review} from '../../types';

export interface ReviewsState {
  isLoading: boolean;
  reviews: Review[];
  error?: string;
}

const initialState: ReviewsState = {
  isLoading: false,
  reviews: [],
};

export const fetchGetReviews = createAsyncThunk(
  'reviews',
  async (id: string) => {
    const response = await getReviews(id);
    return response;
  },
);

export const reviewsState = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetReviews.fulfilled, (state, action) => {
        // If have errors will set error value and set reviews is empty array
        if (action.payload.error) {
          state.reviews = [];
          state.error = action.payload.error;
        }

        // If successfull will set reviews array and set error is undefined
        if (action.payload.response) {
          state.reviews = action.payload.response.data['data'];
          state.error = undefined;
        }
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
