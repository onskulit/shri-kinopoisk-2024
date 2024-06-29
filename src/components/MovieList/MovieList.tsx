import { FC } from 'react';

import { Movie } from '@api/movieApi';
import { EmptyState } from '@components/EmptyState';
import { ErrorText } from '@components/ErrorText';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

type MovieListProps = {
    searchResult?: Movie[];
    isError: boolean;
};

export const MovieList: FC<MovieListProps> = ({ searchResult, isError }) => {
    if (isError) {
        return <ErrorText />;
    }

    return (
        <section className={styles.container}>
            {searchResult?.length ? (
                searchResult.map((movie) => (
                    <MovieSnippet key={movie.id} {...movie} />
                ))
            ) : (
                <EmptyState
                    title="Фильмы не найдены"
                    description="Измените запрос и попробуйте снова"
                />
            )}
        </section>
    );
};
