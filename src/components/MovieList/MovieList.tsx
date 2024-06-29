import { FC, useEffect } from 'react';

import { EmptyState } from '@components/EmptyState';
import { Pagination } from '@components/Pagination';
import { PendingErrorGuard } from '@components/PendingErrorGuard';
import { useGetMovieList } from '@hooks/useGetMovieList';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

export const MovieList: FC = () => {
    const { data, currentPage, isLoading, isFetching, isError } =
        useGetMovieList();

    useEffect(() => {
        window?.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <PendingErrorGuard
            isLoading={isLoading || isFetching}
            isError={isError}
        >
            <section className={styles.container}>
                {data?.search_result.length ? (
                    <>
                        {data.search_result.map((movie) => (
                            <MovieSnippet key={movie.id} {...movie} />
                        ))}
                        <Pagination totalPages={data.total_pages} />
                    </>
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
