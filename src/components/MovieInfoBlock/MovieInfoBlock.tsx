import { useParams } from 'react-router-dom';

import { MovieDescription } from '@components/MovieDescription';
import { MovieRating } from '@components/MovieRating';

import styles from './MovieInfoBlock.module.css';

export const MovieInfoBlock = () => {
    const { id } = useParams();

    return (
        <div className={styles.container}>
            <MovieDescription />
            <MovieRating id={id} />
        </div>
    );
};
