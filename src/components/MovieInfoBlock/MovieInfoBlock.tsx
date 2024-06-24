import { MovieDescription } from '@components/MovieDescription';
import { MovieRating } from '@components/MovieRating';

import styles from './MovieInfoBlock.module.css';

export const MovieInfoBlock = () => {
    return (
        <div className={styles.container}>
            <MovieDescription />
            <MovieRating />
        </div>
    );
};
