import { FC } from 'react';

import { iconColorsMapper } from '@helpers/iconColors';
import { IconBaseProps } from '@helpers/types';

export const SearchIcon: FC<IconBaseProps> = ({
    color,
    width,
    height,
    ...rest
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.833 7.667c0 3.766 3.067 6.833 6.834 6.833 3.766 0 6.833-3.067 6.833-6.833C14.5 3.9 11.433.833 7.667.833 3.9.833.833 3.9.833 7.667Zm1 0a5.84 5.84 0 0 1 5.834-5.834A5.84 5.84 0 0 1 13.5 7.667 5.84 5.84 0 0 1 7.667 13.5a5.84 5.84 0 0 1-5.834-5.833Zm12.48 7.353c.1.1.227.147.354.147a.494.494 0 0 0 .353-.147.503.503 0 0 0 0-.707l-1.333-1.333a.503.503 0 0 0-.707 0 .503.503 0 0 0 0 .707l1.333 1.333Z"
            fill={iconColorsMapper[color] ?? 'currentColor'}
        />
    </svg>
);
