import { apiUrl } from '@helpers/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type AuthorizationParams = {
    username: string;
    password: string;
};

type AuthorizationResponse = {
    token: string;
};

export const authorizationApi = createApi({
    reducerPath: 'authorizationApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<AuthorizationResponse, AuthorizationParams>(
            {
                query: (credentials) => ({
                    url: '/login',
                    method: 'POST',
                    body: credentials,
                }),
            }
        ),
    }),
});

export const loginUserMutation = authorizationApi.endpoints.loginUser.initiate;
