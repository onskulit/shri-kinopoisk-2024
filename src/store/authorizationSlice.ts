import { createSlice } from '@reduxjs/toolkit';

interface AuthorizationState {
    isOpen: boolean;
}

const initialState: AuthorizationState = { isOpen: false };

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        openAuthorizationModal(state) {
            state.isOpen = true;
        },
        closeAuthorizationModal(state) {
            state.isOpen = false;
        },
    },
});

export const { openAuthorizationModal, closeAuthorizationModal } =
    authorizationSlice.actions;
