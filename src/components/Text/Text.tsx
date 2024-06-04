import cn from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Text.module.css';
import { WithClassName } from '@/helpers/types';

type TextProps = {
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
    children,
    className,
}: TextProps) => (
    <Component
        className={cn(
            className,
            styles[`text-${size}`],
            styles[`text-${weight}`],
            styles[`text-${style}`]
        )}
    >
        {children}
    </Component>
);
