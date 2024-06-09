import { useMemo } from 'react';
import { selectTitle } from '@store/search/searchSlice';
import { useAppSelector } from '@store/store';

import { useGetMovieListQuery } from './movieApi';

export const useGetMovies = () => {
    const title = useAppSelector(selectTitle);

    const { data } = useGetMovieListQuery({ page: 1, title });

    return useMemo(() => ({ movies: data?.search_result }), [data]);
};
