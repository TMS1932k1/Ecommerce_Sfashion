import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  postLoginAuth,
  postSignUpAuth,
  readUser,
  saveUser,
} from '../../reponsitories';
import {DataResponse, User} from '../../types';
import {FulfilledAction, PendingAction, RejectedAction} from '../store';

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
    const response = await postLoginAuth(data);
    await saveUserWithResponse(response);
    return response;
  },
);

export const signUpAuth = createAsyncThunk(
  'auth',
  async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    const response = await postSignUpAuth(data);
    await saveUserWithResponse(response);
    return response;
  },
);

export const getSavedUser = createAsyncThunk('save/auth', async () => {
  return await readUser();
});

async function saveUserWithResponse(response: DataResponse): Promise<void> {
  if (!response.error && response.response?.data.user) {
    await saveUser(response.response?.data.user);
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAuth.fulfilled || signUpAuth.fulfilled, (state, action) => {
        // If have errors will set error value and set user is undefined
        if (action.payload.error) {
          state.user = undefined;
          state.error = action.payload.error;
        }

        // If successfull will set user value and set error is undefined
        if (action.payload.response) {
          state.user = action.payload.response.data.user;
          state.error = undefined;
        }
      })
      .addCase(getSavedUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
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
