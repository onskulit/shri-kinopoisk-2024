import { useMemo } from 'react';

import { useGetMovieById } from './useGetMovieById';

export const useGetMovieActors = () => {
    const { movie } = useGetMovieById();

    return useMemo(() => {
        if (!movie) {
            return [];
        }

        return movie.actors;
    }, [movie]);
};
