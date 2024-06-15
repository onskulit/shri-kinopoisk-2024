import { PropsWithChildren } from 'react';
import cn from 'classnames';

import { WithClassName } from '@helpers/types';

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
