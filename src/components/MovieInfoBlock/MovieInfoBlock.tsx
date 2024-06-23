import { MovieDescription } from '@components/MovieDescription';
import { StarRating } from '@components/StarRating';
import { useRateMovie } from '@hooks/useRateMovie';
import { useAppSelector } from '@store/store';

import styles from './MovieInfoBlock.module.css';

export const MovieInfoBlock = () => {
    const [initialRating, rateMovie] = useRateMovie();

    const isAuthorized = useAppSelector(
        (state) => state.authorization.isAuthorized
    );

    return (
        <div className={styles.container}>
            <MovieDescription />
            {isAuthorized && (
                <StarRating
                    defaultTextLabel="Оцените фильм"
                    onRatingChange={rateMovie}
                    initialRating={initialRating}
                />
            )}
        </div>
    );
};
