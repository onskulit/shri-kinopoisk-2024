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

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/api/v1/` }),
    endpoints: (builder) => ({
        getMovieList: builder.query<Movie[], MovieListParams>({
            query: ({ title, page }) => {
                if (title) {
                    return `search?title=${title}&page=${page}`;
                }

                return `search?page=${page}`;
            },
        }),
    }),
});

export const { useGetMovieListQuery } = movieApi;
