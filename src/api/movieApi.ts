import { apiUrl } from '@helpers/env';
import { LocalStorageKey } from '@helpers/localStorage';
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

export const { useRateMovieMutation } = movieApiWithAuth;

export const getMovieList = async (params?: MovieListParams) => {
    try {
        const requestParams = new URLSearchParams(params);
        const response = await fetch(`${apiUrl}search?${requestParams}`, {
            next: { tags: ['first10'] },
        });

        const data: MovieListResponse = await response.json();

        return { data, isError: false };
    } catch (error) {
        console.error('getMovieList method error', error);
        return { data: null, isError: true };
    }
};

export const getMovieById = async (id: string) => {
    try {
        const response = await fetch(`${apiUrl}movie/${id}`, {
            next: { tags: [`movie-${id}`] },
        });

        const movie: SpecificMovie = await response.json();

        return { movie, isError: false };
    } catch (error) {
        console.error('getMovieById method error', error);
        return { data: null, isError: true };
    }
};
