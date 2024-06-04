import cn from 'classnames';
import { FC, MutableRefObject, PropsWithChildren } from 'react';

import styles from './BlockWrapper.module.css';
import { WithClassName } from '@helpers/types';

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
