import { FC } from 'react';

import { EmptyState } from '@components/EmptyState';
import { PendingErrorGuard } from '@components/PendingErrorGuard';
import { useGetMovieList } from '@hooks/useGetMovieList';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

export const MovieList: FC = () => {
    const { data, isLoading, isFetching, isError } = useGetMovieList();

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
