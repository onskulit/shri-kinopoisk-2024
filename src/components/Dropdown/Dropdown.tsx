import React from 'react';
import cn from 'classnames';

import { ArrowIcon } from '@components/ArrowIcon';
import { Spinner } from '@components/Spinner';
import { Text } from '@components/Text';
import { DROPDOWNS_MOUNT_NODE_ID } from '@helpers/consts';
import { useShowPortalBlock } from '@hooks/useShowPortalBlock';

import { Items } from './Items';

import styles from './Dropdown.module.css';

const ITEMS_MARGIN = 4;

type DropdownProps = {
    items: Record<string, string>;
    selectedKey?: string;
    setSelectedValue: (key: string) => void;
    placeholder: string;
    isLoading: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
    selectedKey,
    items,
    placeholder,
    isLoading,
    setSelectedValue,
}) => {
    const { blockRef, isShown, switchShow, blockStyles } = useShowPortalBlock(
        DROPDOWNS_MOUNT_NODE_ID,
        ITEMS_MARGIN
    );

    return (
        <div ref={blockRef} className={styles.container} onClick={switchShow}>
            <div className={cn(styles.text, { [styles.opened]: isShown })}>
                {selectedKey && items[selectedKey] ? (
                    <Text size="xxs" as="span">
                        {items[selectedKey]}
                    </Text>
                ) : (
                    <Text size="xxs" as="span" className={styles.placeholder}>
                        {placeholder}
                    </Text>
                )}
                {isLoading ? (
                    <Spinner size={18} />
                ) : (
                    <ArrowIcon
                        className={cn(styles.icon, {
                            [styles.active]: isShown,
                        })}
                        width={18}
                        height={18}
                        color="secondary-light"
                    />
                )}
            </div>
            {isShown && (
                <Items
                    show={isShown}
                    itemsContainerStyles={blockStyles}
                    items={items}
                    selectedKey={selectedKey}
                    setSelectedValue={setSelectedValue}
                />
            )}
        </div>
    );
};
