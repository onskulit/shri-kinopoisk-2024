import { movieApi } from '@api/movieApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([movieApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
