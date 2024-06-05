import { ChangeEvent, FC, useCallback } from 'react';

import styles from './Input.module.css';

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    disabled?: boolean;
    id?: string;
};

export const Input: FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    disabled,
    id,
}) => {
    const onChangeInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value),
        [onChange]
    );

    return (
        <input
            id={id}
            className={styles.container}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={onChangeInput}
        />
    );
};
