import { PropsWithChildren } from 'react';
import { WithClassName } from '@helpers/types.ts';
import cn from 'classnames';
import styles from './PageBlockItem.module.css';

type PageBlockItemProps = PropsWithChildren & WithClassName;

export const PageBlockItem = (props: PageBlockItemProps) => {
    const { className, children } = props;
    return (
        <section className={cn(styles.container, className)}>
            {children}
        </section>
    );
};
