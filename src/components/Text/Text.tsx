import { PropsWithChildren } from 'react';
import cn from 'classnames';

import { WithClassName } from '@helpers/types';

import styles from './Text.module.css';

type TextProps = {
    color?: 'dark' | 'light' | 'grey' | 'error' | 'primary';
    size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
    as?: 'span' | 'div' | 'p';
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extrabold';
    style?: 'normal' | 'italic';
} & PropsWithChildren &
    WithClassName;

export const Text = ({
    as: Component = 'p',
    size = 'm',
    weight = 'regular',
    style = 'normal',
    color = 'dark',
    children,
    className,
}: TextProps) => (
    <Component
        className={cn(
            className,
            styles[`text-size-${size}`],
            styles[`text-weight-${weight}`],
            styles[`text-style-${style}`],
            styles[`text-color-${color}`]
        )}
    >
        {children}
    </Component>
);
