import { FC } from 'react';

import { MovieListResponse } from '@api/movieApi';
import { EmptyState } from '@components/EmptyState';
import { ErrorText } from '@components/ErrorText';
import { Pagination } from '@components/Pagination';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

type MovieListProps = {
    movieList: MovieListResponse | null;
    isError: boolean;
};

export const MovieList: FC<MovieListProps> = ({ movieList, isError }) => {
    if (isError) {
        return <ErrorText />;
    }

    return (
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
    );
};
