import cn from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Text.module.css';
import { WithClassName } from '@/helpers/types';

type TextProps = {
    size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
    as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extrabold';
} & PropsWithChildren &
    WithClassName;

export const Text = ({
    as: Component = 'p',
    size = 'm',
    weight = 'regular',
    children,
    className,
}: TextProps) => (
    <Component
        className={cn(
            className,
            styles[`text-${size}`],
            styles[`text-${weight}`]
        )}
    >
        {children}
    </Component>
);
