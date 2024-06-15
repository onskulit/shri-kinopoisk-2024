import { FC, MutableRefObject, PropsWithChildren } from 'react';
import cn from 'classnames';

import { WithClassName } from '@helpers/types';

import styles from './BlockWrapper.module.css';

type BlockWrapperProps = {
    blockRef?: MutableRefObject<HTMLElement>;
} & WithClassName;

export const BlockWrapper: FC<PropsWithChildren<BlockWrapperProps>> = ({
    children,
    className,
    blockRef,
}) => (
    <section ref={blockRef} className={cn(styles.container, className)}>
        {children}
    </section>
);
