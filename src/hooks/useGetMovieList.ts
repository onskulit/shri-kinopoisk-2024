import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetMovieListQuery } from '@api/movieApi';

export const useGetMovieList = () => {
    const [params] = useSearchParams();

    const page = params.get('page');
    const title = params.get('title');
    const genre = params.get('genre');
    const years = params.get('years');

    const { data, isLoading, isFetching, isError } = useGetMovieListQuery({
        page: page || undefined,
        title: title || undefined,
        genre: genre || undefined,
        release_year: years || undefined,
    });

    return useMemo(
        () => ({ data, isLoading, isFetching, isError }),
        [data, isLoading, isFetching, isError]
    );
};
