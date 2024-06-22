import { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './FieldWrapper.module.css';

type FieldWrapperProps = {
    label: string;
    labelAddon?: ReactNode;
    htmlFor?: string;
} & PropsWithChildren;

export const FieldWrapper: FC<FieldWrapperProps> = ({
    children,
    label,
    htmlFor,
    labelAddon,
}) => (
    <div className={styles.container}>
        <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor={htmlFor}>
                {label}
            </label>
            {labelAddon}
        </div>
        {children}
    </div>
);
