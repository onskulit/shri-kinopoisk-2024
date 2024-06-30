import { FC } from 'react';

import { iconColorsMapper } from '@helpers/iconColors';
import { IconBaseProps } from '@helpers/types';

export const ChevronIcon: FC<IconBaseProps> = ({
    color,
    width,
    height,
    ...rest
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <path
            d="M11.88 27.56a.989.989 0 0 1-.707-.293 1.006 1.006 0 0 1 0-1.414l8.694-8.693c.64-.64.64-1.68 0-2.32l-8.694-8.693a1.006 1.006 0 0 1 0-1.414 1.006 1.006 0 0 1 1.414 0l8.693 8.694c.68.68 1.067 1.6 1.067 2.573 0 .973-.374 1.893-1.067 2.573l-8.693 8.694c-.2.186-.454.293-.707.293Z"
            fill={iconColorsMapper[color] ?? 'currentColor'}
        />
    </svg>
);
