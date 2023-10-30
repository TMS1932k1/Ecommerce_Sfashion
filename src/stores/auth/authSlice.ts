import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';
import {authService} from '../../services';
import {User} from '../../types';
import {readUser} from '../../utils';
import {postLoginAuth} from '../../reponsitories/AuthQuery';

export interface AuthState {
  isLoading: boolean;
  user?: User;
  error?: string;
}

const initialState: AuthState = {
  isLoading: false,
};

export const loginAuth = createAsyncThunk(
  'auth',
  async (data: {email: string; password: string}) => {
    console.log(await postLoginAuth(data));

    return authService.login(data);
  },
);

export const signUpAuth = createAsyncThunk(
  'auth',
  async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => authService.signup(data),
);

export const getSavedUser = createAsyncThunk('save/auth', async () =>
  readUser(),
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAuth.fulfilled || signUpAuth.fulfilled, (state, action) => {
        console.log(action.payload.data.data.data);
        state.user = action.payload.data.data.data;
        state.error = undefined;
      })
      .addCase(getSavedUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          state.error = undefined;
        }
      })
      .addMatcher<PendingAction>(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
        },
      )
      .addMatcher<RejectedAction>(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.user = undefined;
          state.error = 'Error in fetching auth';
          state.isLoading = false;
        },
      )
      .addMatcher<FulfilledAction>(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.isLoading = false;
        },
      );
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
