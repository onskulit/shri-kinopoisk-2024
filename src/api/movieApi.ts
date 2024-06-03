import { apiUrl } from '@helpers/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Movie = {
    id: string;
    title: string;
    description: string;
    genre: string;
    release_year: number;
};

type MovieListParams = {
    title?: string;
    page: number;
};

type MovieListResponse = {
    search_result: Movie[];
};

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: (builder) => ({
        getMovieList: builder.query<MovieListResponse, MovieListParams>({
            query: (params) => ({
                url: 'search',
                params,
            }),
        }),
    }),
});

export const { useGetMovieListQuery } = movieApi;
