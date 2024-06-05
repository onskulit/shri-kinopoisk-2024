import cn from 'classnames';
import { PropsWithChildren } from 'react';
import { WithClassName } from '@helpers/types';
import styles from './Header.module.css';

type HeaderProps = {
    as?: 'h1' | 'h2' | 'h3';
    isUnselectable?: boolean;
} & PropsWithChildren &
    WithClassName;

export const Header = ({
    as: Component = 'h3',
    children,
    isUnselectable,
    className,
}: HeaderProps) => (
    <Component
        className={cn(className, styles[`header-${Component}`], {
            [styles['header-unselectable']]: isUnselectable,
        })}
    >
        {children}
    </Component>
);
