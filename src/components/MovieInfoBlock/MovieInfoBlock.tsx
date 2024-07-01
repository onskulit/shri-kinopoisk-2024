import { FC } from 'react';

import { SpecificMovie } from '@api/movieApi';
import { MovieDescription } from '@components/MovieDescription';
import { MovieRating } from '@components/MovieRating';

import styles from './MovieInfoBlock.module.css';

type MovieInfoBlockProps = {
    movie: SpecificMovie;
};

export const MovieInfoBlock: FC<MovieInfoBlockProps> = ({ movie }) => {
    return (
        <div className={styles.container}>
            <MovieDescription movie={movie} />
            <MovieRating id={movie.id} />
        </div>
    );
};
