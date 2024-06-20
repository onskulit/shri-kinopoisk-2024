import { useDispatch, useSelector } from 'react-redux';

import { authorizationApi } from '@api/authorizationApi';
import { movieApi } from '@api/movieApi';
import { configureStore } from '@reduxjs/toolkit';

import { authorizationSlice } from './authorizationSlice';
import { searchSlice } from './searchSlice';

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [authorizationApi.reducerPath]: authorizationApi.reducer,
        authorization: authorizationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            movieApi.middleware,
            authorizationApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
