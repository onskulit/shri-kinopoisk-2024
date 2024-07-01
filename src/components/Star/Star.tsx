export type StarProps = {
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
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.773 15.113c-.353 0-.806-.113-1.373-.447l-1.993-1.18c-.207-.12-.607-.12-.807 0l-2 1.18c-1.18.7-1.873.42-2.187.194-.306-.227-.786-.807-.473-2.14l.473-2.047c.054-.213-.053-.58-.213-.74L1.547 8.28C.72 7.453.787 6.747.9 6.4c.113-.347.473-.96 1.62-1.153l2.127-.354c.2-.033.486-.246.573-.426L6.4 2.113C6.933 1.04 7.633.88 8 .88s1.067.16 1.6 1.233l1.173 2.347c.094.18.38.393.58.427l2.127.353c1.153.193 1.513.807 1.62 1.153.107.347.173 1.054-.647 1.88L12.8 9.933c-.16.16-.26.52-.213.74l.473 2.047c.307 1.333-.167 1.913-.473 2.14-.167.12-.434.253-.814.253Z"
                    fill={
                        value <= (hover || rating)
                            ? 'var(--color-primary)'
                            : 'transparent'
                    }
                    stroke={
                        value <= (hover || rating)
                            ? 'inherit'
                            : 'var(--color-secondary-7)'
                    }
                />
            </svg>
        </div>
    );
};
