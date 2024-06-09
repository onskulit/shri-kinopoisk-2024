import { useGetMovieById } from './useGetMovieById.ts';

export const useGetMovieActors = () => {
    const { movie } = useGetMovieById();

    if (!movie) {
        return [];
    }
    return movie.actors;
};
