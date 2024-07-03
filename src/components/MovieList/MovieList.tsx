import { FC } from 'react';

import { MovieListResponse } from '@api/movieApi';
import { EmptyState } from '@components/EmptyState';
import { Pagination } from '@components/Pagination';
import { PendingErrorGuard } from '@components/PendingErrorGuard';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

type MovieListProps = {
    movieList: MovieListResponse | null;
    isError: boolean;
};

export const MovieList: FC<MovieListProps> = ({ movieList, isError }) => (
    <PendingErrorGuard isError={isError}>
        <section className={styles.container}>
            {movieList && movieList.search_result?.length ? (
                <>
                    {movieList.search_result.map((movie) => (
                        <MovieSnippet key={movie.id} {...movie} />
                    ))}
                    <Pagination totalPages={movieList.total_pages} />
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
