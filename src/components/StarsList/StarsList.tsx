import { useState } from 'react';

import { StarWithLabel } from '@components/StarWithLabel';

import styles from './StarsList.module.css';

type StarsListProps = {
    totalStars: number;
    rating: number;
    handleRatingChange: (value: number) => void;
};

export const StarsList = ({
    totalStars,
    handleRatingChange,
    rating,
}: StarsListProps) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={styles.container}>
            {[...Array(totalStars)].map((_, index) => {
                const value = index + 1;
                return (
                    <StarWithLabel
                        key={index}
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
