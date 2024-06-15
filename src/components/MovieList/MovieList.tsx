import { FC } from 'react';

import { useGetMovies } from '@api/hooks';

import { MovieSnippet } from '../MovieSnippet';

import styles from './MovieList.module.css';

export const MovieList: FC = () => {
    const { movies } = useGetMovies();

    if (!movies) {
        return null;
    }

    return (
        <section className={styles.container}>
            {movies.map((movie) => (
                <MovieSnippet key={movie.id} {...movie} />
            ))}
        </section>
    );
};
