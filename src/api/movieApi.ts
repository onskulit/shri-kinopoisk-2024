import { apiUrl } from '@helpers/env';
import { LocalStorageKey } from '@helpers/localStorage.ts';

import { revalidateTagAction } from '../app/actions.ts';

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
    userRate: number;
};

export type RateMovieResponse = {
    movieId: MovieId;
    newAverageRate: number;
    newTotalRatesCount: number;
};

export const getMovieList = async (params?: MovieListParams) => {
    try {
        const requestParams = new URLSearchParams(params);
        const response = await fetch(`${apiUrl}/search?${requestParams}`, {
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
        const response = await fetch(`${apiUrl}/movie/${id}`, {
            next: { tags: [`movie-${id}`] },
        });

        const movie: SpecificMovie = await response.json();

        return { movie, isError: false };
    } catch (error) {
        console.error('getMovieById method error', error);
        return { data: null, isError: true };
    }
};

export const rateMovie = async (request: RateMovieRequest) => {
    try {
        const headers = new Headers({
            authorization: `Bearer ${localStorage.getItem(LocalStorageKey.AuthToken)}`,
        });

        const body = {
            movieId: request.movieId,
            user_rate: request.userRate,
        };

        const response = await fetch(`${apiUrl}/rateMovie`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers,
        });

        try {
            await revalidateTagAction(`movie-${request.movieId}`);
        } catch (_) {
            console.error(
                `Revalidation /movie/${request.movieId} handler is failed.`
            );
        }

        const data: RateMovieResponse = await response.json();
        return { data, isError: false };
    } catch (error) {
        console.error('getMovieById method error', error);
        return { data: null, isError: true };
    }
};
