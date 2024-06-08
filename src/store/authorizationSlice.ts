import { AuthorizationParams, loginUserMutation } from '@api/authorizationApi';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKey } from '@helpers/localStorage';

interface AuthorizationState {
    isOpen: boolean;
    isLoading: boolean;
    isAuthorized: boolean;
}

const initialState: AuthorizationState = {
    isOpen: false,
    isLoading: false,
    isAuthorized: false,
};

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
        setIsAuthorized(state, action: PayloadAction<boolean>) {
            console.log({
                isAuthorized: action.payload,
            });
            state.isAuthorized = action.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuthorized = true;
            state.isOpen = false;
        });
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const {
    openAuthorizationModal,
    closeAuthorizationModal,
    setIsAuthorized,
    setIsLoading,
} = authorizationSlice.actions;

export const loginUser = createAsyncThunk(
    'loginUser',
    async (credentials: AuthorizationParams, { dispatch, rejectWithValue }) => {
        const response = await dispatch(loginUserMutation(credentials));
        const { error, data } = response;
        if (error) {
            console.log('Что-то пошло не так');
            return rejectWithValue(error);
        }
        localStorage.setItem(LocalStorageKey.Token, data.token);
        return data;
    }
);
