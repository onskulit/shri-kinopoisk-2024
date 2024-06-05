import { FC, PropsWithChildren } from 'react';

import styles from './SelectWrapper.module.css';

type SelectWrapperProps = {
    label: string;
    htmlFor?: string;
} & PropsWithChildren;

export const SelectWrapper: FC<SelectWrapperProps> = ({
    children,
    label,
    htmlFor,
}) => (
    <div className={styles.container}>
        <label className={styles.label} htmlFor={htmlFor}>
            {label}
        </label>
        {children}
    </div>
);
