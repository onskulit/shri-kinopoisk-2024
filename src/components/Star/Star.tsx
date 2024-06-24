type StarProps = {
    rating: number;
    value: number;
    hover: number;
    handleChange: (value: number) => void;
    handleHover: (value: number) => void;
};

export const Star = ({
    rating,
    value,
    hover,
    handleChange,
    handleHover,
}: StarProps) => {
    return (
        <div
            onClick={() => handleChange(value)}
            onMouseEnter={() => handleHover(value)}
            onMouseLeave={() => handleHover(rating)}
        >
            <svg
                fill={
                    value <= (hover || rating)
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
