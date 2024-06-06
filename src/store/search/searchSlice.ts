import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type SearchState = {
    title: string;
};

const initialState: SearchState = {
    title: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    },
});

export const { setTitle } = searchSlice.actions;

export const selectTitle = (state: RootState) => state.search.title;

export default searchSlice.reducer;
