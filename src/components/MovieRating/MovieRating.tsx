import { StarRating } from '@components/StarRating';
import { useRateMovie } from '@hooks/useRateMovie';
import { useAppSelector } from '@store/store';

export const MovieRating = () => {
    const [initialRating, rateMovie] = useRateMovie();

    const isAuthorized = useAppSelector(
        (state) => state.authorization.isAuthorized
    );

    if (!isAuthorized) {
        return null;
    }

    return (
        <StarRating
            defaultTextLabel="Оцените фильм"
            onRatingChange={rateMovie}
            initialRating={initialRating}
        />
    );
};
