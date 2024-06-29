import { FC } from 'react';
import cn from 'classnames';

import { ChevronIcon } from '@components/ChevronIcon';

import styles from './NavigationButton.module.css';

type NavigationButtonProps = {
    type: 'next' | 'prev';
    size: 'm' | 's';
    isDisabled?: boolean;
    onClick: () => void;
};

export const NavigationButton: FC<NavigationButtonProps> = ({
    type,
    size,
    isDisabled,
    onClick,
}) => {
    const iconSize = size === 'm' ? 32 : 16;
    const color = isDisabled ? 'secondary-light' : 'secondary';

    return (
        <button
            className={cn(
                styles.container,
                styles[`size-${size}`],
                isDisabled && styles.disabled
            )}
            onClick={onClick}
            disabled={isDisabled}
        >
            <ChevronIcon
                className={cn(type === 'prev' && styles.prev)}
                width={iconSize}
                height={iconSize}
                color={color}
            />
        </button>
    );
};
