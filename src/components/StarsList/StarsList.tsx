import { useState } from 'react';

import { Star } from '@components/Star';

type StarsListProps = {
    totalStars: number;
    rating: number;
    handleRatingChange: (value: number) => void;
};

export const StarList = ({
    totalStars,
    handleRatingChange,
    rating,
}: StarsListProps) => {
    const [hover, setHover] = useState(0);

    return (
        <div style={{ display: 'flex' }}>
            {[...Array(totalStars)].map((_, index) => {
                const value = index + 1;
                return (
                    <Star
                        key={value}
                        rating={rating}
                        value={value}
                        hover={hover}
                        handleChange={handleRatingChange}
                        handleHover={setHover}
                    />
                );
            })}
        </div>
    );
};
