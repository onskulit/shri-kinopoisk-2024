'use client';
import { FC } from 'react';

import { StarRating } from '@components/StarRating';
import { useRateMovie } from '@hooks/useRateMovie';
import { useAppSelector } from '@store/store';

type MovieRatingProps = {
    id?: string;
};

export const MovieRating: FC<MovieRatingProps> = ({ id }) => {
    const [initialRating, rateMovie] = useRateMovie(id);

    const isAuthorized = useAppSelector(
        (state) => state.authorization.isAuthorized
    );

    if (!isAuthorized) {
        return null;
    }

    return (
        <StarRating onRatingChange={rateMovie} initialRating={initialRating} />
    );
};
