import { Star } from '@components/Star';

type StarsListProps = {
    totalStars: number;
    onRatingChange: (value: number) => void;
    rating: number;
};

export const StarList = ({
    totalStars,
    onRatingChange,
    rating,
}: StarsListProps) => {
    return (
        <div style={{ display: 'flex' }}>
            {[...Array(totalStars)].map((_, index) => {
                const sequenceNumber = index + 1;
                return (
                    <Star
                        key={sequenceNumber}
                        sequenceNumber={sequenceNumber}
                        onChange={onRatingChange}
                        rating={rating}
                    />
                );
            })}
        </div>
    );
};
