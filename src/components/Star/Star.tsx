import { useCallback, useState } from 'react';

type StarProps = {
    sequenceNumber: number;
    rating: number;
    onChange: (value: number) => void;
};

export const Star = ({ sequenceNumber, onChange, rating }: StarProps) => {
    const [hoveredNumber, setHoveredNumber] = useState(0);

    const handleClick = useCallback(() => {
        onChange(sequenceNumber);
    }, [onChange, sequenceNumber]);

    const handleMouseEnter = useCallback(() => {
        setHoveredNumber(sequenceNumber);
    }, [setHoveredNumber, sequenceNumber]);

    const handleMouseLeave = useCallback(() => {
        setHoveredNumber(0);
    }, [setHoveredNumber]);

    return (
        <div
            className="star"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                fill={
                    sequenceNumber <= (hoveredNumber || rating)
                        ? 'var(--color-info-pale)'
                        : 'grey'
                }
                height={44}
                width={44}
                viewBox="0 0 22 22"
            >
                <polygon
                    strokeWidth="0"
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                />
            </svg>
        </div>
    );
};
