import { Movie } from '@/api/movieApi';
import { FC } from 'react';
import { MovieSnippet } from '../MovieSnippet';
import styles from './MovieList.module.css';

type MovieListProps = {
    movieList: Movie[];
};

export const MovieList: FC<MovieListProps> = ({ movieList }) => (
    <section className={styles.container}>
        {movieList.map((movie) => (
            <MovieSnippet key={movie.id} {...movie} />
        ))}
    </section>
);
