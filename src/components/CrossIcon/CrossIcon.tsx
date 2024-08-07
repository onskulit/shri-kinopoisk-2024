import { FC } from 'react';

import { iconColorsMapper } from '@helpers/iconColors';
import { IconBaseProps } from '@helpers/types';

export const CrossIcon: FC<IconBaseProps> = ({
    color,
    width,
    height,
    ...rest
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
    >
        <path
            d="M9.854 9.146a.5.5 0 1 1-.708.708L5 5.707.854 9.854a.5.5 0 1 1-.708-.708L4.293 5 .146.854A.5.5 0 1 1 .854.146L5 4.293 9.146.146a.5.5 0 0 1 .708.708L5.707 5l4.147 4.146Z"
            fill={iconColorsMapper[color] ?? 'currentColor'}
        />
    </svg>
);
