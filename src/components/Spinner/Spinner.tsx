'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { WithClassName } from '@helpers/types';

import styles from './Spinner.module.css';

const DEFAULT_SIZE = 100;
const DEFAULT_DELAY = 100;

type SpinnerProps = WithClassName & {
    size?: number;
    delay?: number;
};

export const Spinner: React.FC<SpinnerProps> = ({
    delay = DEFAULT_DELAY,
    size = DEFAULT_SIZE,
    className,
}) => {
    const [isShown, setIsShown] = useState<boolean>(false);

    useEffect(() => {
        const timerId = setTimeout(() => setIsShown(true), delay);
        return () => clearTimeout(timerId);
    }, [delay]);

    return (
        <span
            className={classNames(styles.loader, className, {
                [styles.show]: isShown,
            })}
            style={{ width: `${size}px`, height: `${size}px` }}
        />
    );
};
