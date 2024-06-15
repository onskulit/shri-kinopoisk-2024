import { Children, PropsWithChildren } from 'react';

import { WithClassName } from '@helpers/types';

type PageBlocksProps = PropsWithChildren & WithClassName;
import styles from './PageBlocks.module.css';

export const PageBlocks = ({ children, className }: PageBlocksProps) => {
    const arrayChildren = Children.toArray(children);
    return (
        <div className={className}>
            {Children.map(arrayChildren, (child) => {
                return <div className={styles.container}>{child}</div>;
            })}
        </div>
    );
};
