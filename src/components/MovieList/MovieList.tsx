import { FC } from 'react';

import { useGetMovieListQuery } from '@api/movieApi';
import { EmptyState } from '@components/EmptyState';
import { PendingErrorGuard } from '@components/PendingErrorGuard';
import { useSetSearchParams } from '@hooks/useSetQueryParams';
import { filterParamsSelector } from '@store/search/searchSlice';
import { useAppSelector } from '@store/store';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

export const MovieList: FC = () => {
    const { title, genre, years, page } = useAppSelector(filterParamsSelector);

    useSetSearchParams();

    const { data, isLoading, isFetching, isError } = useGetMovieListQuery({
        page,
        title: title ? title : undefined,
        genre: genre !== '0' ? genre : undefined,
        release_year: years !== '0' ? years : undefined,
    });

    return (
        <PendingErrorGuard
            isLoading={isLoading || isFetching}
            isError={isError}
        >
            <section className={styles.container}>
                {data?.search_result.length ? (
                    data.search_result.map((movie) => (
                        <MovieSnippet key={movie.id} {...movie} />
                    ))
                ) : (
                    <EmptyState
                        title="Фильмы не найдены"
                        description="Измените запрос и попробуйте снова"
                    />
                )}
            </section>
        </PendingErrorGuard>
    );
};
