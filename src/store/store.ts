import { useDispatch, useSelector } from 'react-redux';

import { authorizationApi } from '@api/authorizationApi';
import { movieApi,movieApiWithAuth } from '@api/movieApi';
import { configureStore } from '@reduxjs/toolkit';

import { authorizationSlice } from './authorizationSlice';
import { searchSlice } from './searchSlice';

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
        [movieApiWithAuth.reducerPath]: movieApiWithAuth.reducer,
        [authorizationApi.reducerPath]: authorizationApi.reducer,
        authorization: authorizationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            movieApi.middleware,
            movieApiWithAuth.middleware,
            authorizationApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
