import cn from 'classnames';
import { PropsWithChildren } from 'react';
import { WithClassName } from '@helpers/types';

import styles from './Button.module.css';

type ButtonProps = {
    size: 's' | 'm';
    color: 'primary' | 'transparent';
    onClick: () => void;
    isDisabled?: boolean;
} & PropsWithChildren &
    WithClassName;

export const Button = ({
    children,
    size,
    color,
    className,
    isDisabled,
    onClick,
}: ButtonProps) => (
    <button
        className={cn(
            className,
            styles.button,
            styles[`button-size-${size}`],
            styles[`button-color-${color}`],
            {
                [styles['button-disabled']]: isDisabled,
            }
        )}
        disabled={isDisabled}
        onClick={onClick}
    >
        {children}
    </button>
);
