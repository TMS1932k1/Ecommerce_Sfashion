import authSlice from './auth/authSlice';
import {AsyncThunk, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import collectionsSlice from './home/collectionsSlice';
import arrivalsSlice from './home/arrivalsSlice';
import categoriesSlice from './home/categoriesSlice';

export const store = configureStore({
  reducer: {
    authState: authSlice,
    collectionsState: collectionsSlice,
    arrivalsState: arrivalsSlice,
    categoriesState: categoriesSlice,
  },
});

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
