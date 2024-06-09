import { PropsWithChildren } from 'react';
import { WithClassName } from '@helpers/types.ts';
import cn from 'classnames';

import styles from './Row.module.css';

type RowProps = PropsWithChildren & WithClassName;

export const Row = (props: RowProps) => {
    const { className, children } = props;
    return <div className={cn(styles.container, className)}>{children}</div>;
};
