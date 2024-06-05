import { FC } from 'react';
import { IconBaseProps } from '@helpers/types';
import { iconColorsMapper } from '@helpers/iconColors';

export const CrossIcon: FC<IconBaseProps> = ({
    color,
    width,
    height,
    disabled,
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
            d="M9.85372 9.14628C9.90018 9.19274 9.93703 9.24789 9.96217 9.30859C9.98731 9.36928 10.0003 9.43434 10.0003 9.50003C10.0003 9.56573 9.98731 9.63079 9.96217 9.69148C9.93703 9.75218 9.90018 9.80733 9.85372 9.85378C9.80727 9.90024 9.75212 9.93709 9.69142 9.96223C9.63072 9.98737 9.56567 10.0003 9.49997 10.0003C9.43428 10.0003 9.36922 9.98737 9.30853 9.96223C9.24783 9.93709 9.19268 9.90024 9.14622 9.85378L4.99997 5.70691L0.853723 9.85378C0.759902 9.94761 0.632655 10.0003 0.499973 10.0003C0.367291 10.0003 0.240043 9.94761 0.146223 9.85378C0.0524025 9.75996 -0.000305173 9.63272 -0.000305176 9.50003C-0.000305178 9.36735 0.0524025 9.2401 0.146223 9.14628L4.2931 5.00003L0.146223 0.853784C0.0524025 0.759964 -0.000305176 0.632716 -0.000305176 0.500034C-0.000305176 0.367352 0.0524025 0.240104 0.146223 0.146284C0.240043 0.0524635 0.367291 -0.000244141 0.499973 -0.000244141C0.632655 -0.000244141 0.759902 0.0524635 0.853723 0.146284L4.99997 4.29316L9.14622 0.146284C9.24004 0.0524635 9.36729 -0.000244143 9.49997 -0.000244141C9.63266 -0.000244138 9.7599 0.0524635 9.85372 0.146284C9.94754 0.240104 10.0003 0.367352 10.0003 0.500034C10.0003 0.632716 9.94754 0.759964 9.85372 0.853784L5.70685 5.00003L9.85372 9.14628Z"
            fill={
                disabled
                    ? iconColorsMapper['secondary-light']
                    : iconColorsMapper[color]
            }
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 29.3334H19C26.24 29.3334 29.3333 26.2401 29.3333 19.0001V11.0001C29.3333 3.76008 26.24 0.666748 19 0.666748H11C3.75996 0.666748 0.666626 3.76008 0.666626 11.0001V19.0001C0.666626 26.2401 3.75996 29.3334 11 29.3334ZM2.66663 11.0001C2.66663 4.85341 4.85329 2.66675 11 2.66675H19C25.1466 2.66675 27.3333 4.85341 27.3333 11.0001V19.0001C27.3333 25.1467 25.1466 27.3334 19 27.3334H11C4.85329 27.3334 2.66663 25.1467 2.66663 19.0001V11.0001ZM14.2933 18.5868C14.4933 18.7868 14.7466 18.8801 14.9999 18.8801C15.2533 18.8801 15.5066 18.7868 15.7066 18.5868L20.4133 13.8801C20.7999 13.4934 20.7999 12.8534 20.4133 12.4668C20.0266 12.0801 19.3866 12.0801 19 12.4668L14.9999 16.4668L10.9999 12.4668C10.6133 12.0801 9.97328 12.0801 9.58662 12.4668C9.19995 12.8534 9.19995 13.4934 9.58662 13.8801L14.2933 18.5868Z"
        />
    </svg>
);
