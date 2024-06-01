import cn from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Text.module.css';

type TextProps = {
    size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
    className?: string;
} & PropsWithChildren;

export const Text = ({ size = 'm', children, className }: TextProps) => {
    return <p className={cn(className, styles[`text-${size}`])}>{children}</p>;
};
