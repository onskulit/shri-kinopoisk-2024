import { FC } from 'react';
import { MovieSnippet } from '../MovieSnippet';
import styles from './MovieList.module.css';
import { useGetMovies } from '@api/hooks';

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
