import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

type SearchState = {
    title: string;
    genre: string;
    years: string;
    page: number;
};

const initialState: SearchState = {
    title: '',
    genre: '0',
    years: '0',
    page: 1,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        setYears: (state, action: PayloadAction<string>) => {
            state.years = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export const { setTitle, setGenre, setYears, setPage } = searchSlice.actions;

export const selectTitle = (state: RootState) => state.search.title;
export const selectGenre = (state: RootState) => state.search.genre;
export const selectYears = (state: RootState) => state.search.years;
export const selectPage = (state: RootState) => state.search.page;

export const filterParamsSelector = createSelector(
    [selectTitle, selectGenre, selectYears, selectPage],
    (title, genre, years, page) => ({
        title,
        genre,
        years,
        page,
    })
);

export default searchSlice.reducer;
