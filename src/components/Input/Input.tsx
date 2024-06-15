import { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react';

import { Text } from '@components/Text';

import styles from './Input.module.css';

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: Extract<
        InputHTMLAttributes<string>['type'],
        'text' | 'password' | 'number' | 'email'
    >;
    error?: string;
    disabled?: boolean;
    id?: string;
};

export const Input: FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    disabled,
    id,
    error,
    type = 'text',
}) => {
    const onChangeInput = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value),
        [onChange]
    );

    return (
        <div className={styles.container}>
            <input
                id={id}
                className={styles.input}
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={onChangeInput}
            />
            {error && (
                <Text size="xxs" color="error">
                    {error}
                </Text>
            )}
        </div>
    );
};
