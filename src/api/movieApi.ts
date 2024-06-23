import { apiUrl } from '@helpers/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type MovieListParams = {
    title?: string;
    genre?: string;
    release_year?: string;
    page?: string;
};

export type MovieId = string;
export type Movie = {
    id: MovieId;
    title: string;
    poster: string;
    description: string;
    genre: string;
    release_year: number;
    rating: number;
};

type MovieListResponse = {
    search_result: Movie[];
};

export type SpecificMovie = Movie & {
    actors: Actor[];
};

export type Actor = {
    name: string;
    photo: string;
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
        getMovieById: builder.query<SpecificMovie, MovieId>({
            query: (id) => `movie/${id}`,
        }),
    }),
});

export const { useGetMovieListQuery, useGetMovieByIdQuery } = movieApi;
