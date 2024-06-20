import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type SearchState = {
    page: number;
};

const initialState: SearchState = {
    page: 1,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export const { setPage } = searchSlice.actions;

export const selectPage = (state: RootState) => state.search.page;
