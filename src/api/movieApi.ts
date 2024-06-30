import { apiUrl } from '@helpers/env';

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

export const getMovieList = async (params?: MovieListParams) => {
    try {
        const requestParams = new URLSearchParams(params);
        const response = await fetch(`${apiUrl}search?${requestParams}`, {
            next: { tags: ['first10'] },
        });

        const data: MovieListResponse = await response.json();

        return { data, isError: false };
    } catch {
        return { data: null, isError: true };
    }
};

export const getMovie = async (id: string) => {
    try {
        const response = await fetch(`${apiUrl}movie/${id}`, {
            next: { tags: [`movie-${id}`] },
        });

        const movie: SpecificMovie = await response.json();

        return { movie, isError: false };
    } catch {
        return { data: null, isError: true };
    }
};
