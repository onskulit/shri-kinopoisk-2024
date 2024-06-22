import { FC } from 'react';

import { iconColorsMapper } from '@helpers/iconColors';
import { IconBaseProps } from '@helpers/types';

export const UserIcon: FC<IconBaseProps> = ({
    color,
    width,
    height,
    ...rest
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 26 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.333 8.333C5.333 12.56 8.773 16 13 16s7.667-3.44 7.667-7.667c0-4.226-3.44-7.666-7.667-7.666s-7.667 3.44-7.667 7.666Zm2 0A5.679 5.679 0 0 1 13 2.667a5.679 5.679 0 0 1 5.667 5.666A5.679 5.679 0 0 1 13 14a5.679 5.679 0 0 1-5.667-5.667Zm16.12 20c0 .547.454 1 1 1 .547 0 1-.453 1-1C25.453 22.64 19.867 18 13 18 6.134 18 .547 22.64.547 28.333c0 .547.453 1 1 1 .547 0 1-.453 1-1C2.547 23.733 7.24 20 13 20s10.453 3.733 10.453 8.333Z"
            fill={iconColorsMapper[color] ?? 'currentColor'}
        />
    </svg>
);
