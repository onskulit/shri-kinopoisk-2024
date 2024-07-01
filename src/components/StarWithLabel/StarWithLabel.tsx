import { Star, StarProps } from '@components/Star';
import { StarRatingLabel } from '@components/StarRatingLabel';

import styles from './StarWithLabel.module.css';

type StarWithLabelProps = StarProps;

export const StarWithLabel = (props: StarWithLabelProps) => {
    const { value, rating, hover, handleHover, handleChange } = props;
    return (
        <div className={styles.container}>
            <Star
                key={value}
                rating={rating}
                value={value}
                hover={hover}
                handleChange={handleChange}
                handleHover={handleHover}
            />
            <StarRatingLabel estimation={value} />
        </div>
    );
};
