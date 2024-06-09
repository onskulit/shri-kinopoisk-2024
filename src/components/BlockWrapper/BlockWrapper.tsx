import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { WithClassName } from '@helpers/types';
import cn from 'classnames';

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
