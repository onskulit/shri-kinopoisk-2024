import { useCallback, useMemo, useState } from 'react';

import { StarRatingLabel } from '@components/StarRatingLabel';
import { StarList } from '@components/StarsList';

type StarRatingProps = {
    defaultTextLabel: string;
    totalStars?: number;
    initialRating?: number;
    onRatingChange?: (rating: number) => void;
};

export const StarRating: React.FC<StarRatingProps> = ({
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
    defaultTextLabel,
}) => {
    const [rating, setRating] = useState(initialRating);

    const handleRatingChange = useCallback(
        (ratingValue: number) => {
            setRating(ratingValue);
            onRatingChange?.(ratingValue);
        },
        [onRatingChange]
    );

    const labelText = useMemo(() => {
        return rating !== 0 ? `Ваша оценка: ${rating}` : defaultTextLabel;
    }, [defaultTextLabel, rating]);

    return (
        <div>
            <StarRatingLabel labelText={labelText} />
            <StarList
                totalStars={totalStars}
                onRatingChange={handleRatingChange}
                rating={rating}
            />
        </div>
    );
};
