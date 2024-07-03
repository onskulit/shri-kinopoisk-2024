import { useDispatch, useSelector } from 'react-redux';

import { authorizationApi } from '@api/authorizationApi';
import { configureStore } from '@reduxjs/toolkit';

import { authorizationSlice } from './authorizationSlice';

export const store = configureStore({
    reducer: {
        [authorizationApi.reducerPath]: authorizationApi.reducer,
        authorization: authorizationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authorizationApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
