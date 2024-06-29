import { apiUrl } from '@helpers/env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type MovieListParams = {
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

export type MovieListResponse = {
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
        getMovieById: builder.query<SpecificMovie, MovieId>({
            query: (id) => `movie/${id}`,
        }),
    }),
});

export const { useGetMovieByIdQuery } = movieApi;

export const getMovieList = async (params?: MovieListParams) => {
    try {
        const requestParams = new URLSearchParams(params);
        const response = await fetch(`${apiUrl}search?${requestParams}`, {
            cache: 'no-store',
        });

        const data: MovieListResponse = await response.json();

        return { data: data, isError: false };
    } catch {
        return { data: null, isError: true };
    }
};
