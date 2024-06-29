import { apiUrl } from '@helpers/env';
import { LocalStorageKey } from '@helpers/localStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type MovieListParams = {
    title?: string;
    genre?: string;
    release_year?: string;
    page?: number;
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
    total_pages: number;
};

export type SpecificMovie = Movie & {
    actors: Actor[];
};

export type Actor = {
    name: string;
    photo: string;
};

export type RateMovieRequest = {
    movieId: MovieId;
    user_rate: number;
};

export type RateMovieResponse = {
    movieId: MovieId;
    newAverageRate: number;
    newTotalRatesCount: number;
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

const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: async (headers) => {
        const accessToken = localStorage.getItem(LocalStorageKey.AuthToken);

        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`);
        }

        return headers;
    },
});

export const movieApiWithAuth = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        rateMovie: builder.mutation<RateMovieResponse, RateMovieRequest>({
            query: (request) => ({
                url: 'rateMovie',
                method: 'POST',
                body: request,
            }),
            async onQueryStarted(request, { dispatch, queryFulfilled }) {
                try {
                    const {
                        data: { newAverageRate, movieId },
                    } = await queryFulfilled;

                    const storedRatings = localStorage.getItem(
                        LocalStorageKey.MoviesRatings
                    );
                    const parsedObject = storedRatings
                        ? JSON.parse(storedRatings)
                        : {};

                    parsedObject[movieId] = request.user_rate;
                    localStorage.setItem(
                        LocalStorageKey.MoviesRatings,
                        JSON.stringify(parsedObject)
                    );

                    dispatch(
                        movieApi.util.updateQueryData(
                            'getMovieById',
                            movieId,
                            (draft) => {
                                draft.rating = newAverageRate;
                            }
                        )
                    );
                } catch {
                    throw new Error(
                        `Error during pessimistic updates. MovieId: ${request.movieId}`
                    );
                }
            },
        }),
    }),
});

export const { useGetMovieListQuery, useGetMovieByIdQuery } = movieApi;
export const { useRateMovieMutation } = movieApiWithAuth;
