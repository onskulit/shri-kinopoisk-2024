import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import { CrossRoundIcon } from '@components/CrossRoundIcon';
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
    icon?: JSX.Element;
    isClearable?: boolean;
};

export const Input: FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    disabled,
    id,
    error,
    type = 'text',
    icon,
    isClearable,
}) => {
    const handleInput = (event: ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value);

    const handleClear = () => onChange('');

    return (
        <div className={styles.container}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <input
                id={id}
                className={cn(styles.input, icon && styles.withIcon)}
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={handleInput}
            />
            {isClearable && value && (
                <button className={styles.clearButton} onClick={handleClear}>
                    <CrossRoundIcon
                        width={16}
                        height={16}
                        color="secondary-light"
                    />
                </button>
            )}
            {error && (
                <Text size="xxs" color="error">
                    {error}
                </Text>
            )}
        </div>
    );
};
