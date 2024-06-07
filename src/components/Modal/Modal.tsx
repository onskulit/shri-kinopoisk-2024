import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Header } from '@components/Header';
import { Portal } from '@components/Portal';
import { CrossIcon } from '@components/CrossIcon';

import styles from './Modal.module.css';

type ModalProps = {
    isOpen: boolean;
    title: string;
    onClose?: () => void;
} & PropsWithChildren;

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    children,
    onClose,
}) => {
    return (
        <Portal>
            <div
                className={cn(styles.backdrop, {
                    [styles.backdropShown]: isOpen,
                })}
            >
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <Header as="h3">{title}</Header>
                        {onClose && (
                            <div
                                className={styles.closeButton}
                                onClick={onClose}
                            >
                                <CrossIcon
                                    width={10}
                                    height={10}
                                    color="secondary"
                                />
                            </div>
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
