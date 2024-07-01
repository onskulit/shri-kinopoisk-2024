import { useCallback, useState } from 'react';

import { StarsList } from '@components/StarsList';

type StarRatingProps = {
    totalStars?: number;
    initialRating?: number;
    onRatingChange?: (rating: number) => void;
};

export const StarRating: React.FC<StarRatingProps> = ({
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
}) => {
    const [rating, setRating] = useState(initialRating);

    const handleRatingChange = useCallback(
        (ratingValue: number) => {
            setRating(ratingValue);
            onRatingChange?.(ratingValue);
        },
        [onRatingChange]
    );

    return (
        <StarsList
            rating={rating}
            totalStars={totalStars}
            handleRatingChange={handleRatingChange}
        />
    );
};
