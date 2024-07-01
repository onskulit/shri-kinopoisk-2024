import { forwardRef } from 'react';
import cn from 'classnames';

import { ChevronIcon } from '@components/ChevronIcon';

import styles from './NavigationButton.module.css';

type NavigationButtonProps = {
    type: 'next' | 'prev';
    size: 'm' | 's';
    isDisabled?: boolean;
    isHidden?: boolean;
    onClick: () => void;
};

export const NavigationButton = forwardRef<
    HTMLButtonElement,
    NavigationButtonProps
>(({ type, size, isDisabled, isHidden, onClick }, ref) => {
    const iconSize = size === 'm' ? 32 : 16;
    const color = isDisabled ? 'secondary-light' : 'secondary';

    return (
        <button
            className={cn(
                styles.container,
                styles[`size-${size}`],
                isDisabled && styles.disabled,
                isHidden && styles.hidden
            )}
            onClick={onClick}
            disabled={isDisabled}
            ref={ref}
        >
            <ChevronIcon
                className={cn(type === 'prev' && styles.prev)}
                width={iconSize}
                height={iconSize}
                color={color}
            />
        </button>
    );
});
