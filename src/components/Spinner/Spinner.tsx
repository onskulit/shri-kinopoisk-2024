import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './Spinner.module.css';

const DEFAULT_SIZE = 100;
const DEFAULT_DELAY = 100;

type SpinnerProps = {
    size?: number;
    delay?: number;
};

export const Spinner: React.FC<SpinnerProps> = ({
    delay = DEFAULT_DELAY,
    size = DEFAULT_SIZE,
}) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const timerId = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(timerId);
    }, [delay]);

    return (
        <span
            className={classNames(styles.loader, { [styles.show]: show })}
            style={{ width: `${size}px`, height: `${size}px` }}
        />
    );
};
