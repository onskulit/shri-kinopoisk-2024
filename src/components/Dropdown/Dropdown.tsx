import cn from 'classnames';
import React from 'react';

import { Spinner } from '@components/Spinner';
import { ArrowIcon } from '@components/ArrowIcon';

import { useShowPortalBlock } from '@hooks/useShowPortalBlock';

import { Items } from './Items';

import styles from './Dropdown.module.css';
import { Text } from '@components/Text';
import { dropdownsMountNodeId } from '@helpers/consts';

type DropdownProps = {
    items: Record<string, string>;
    selectedKey: string;
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
    const { blockRef, show, switchShow, blockStyles } =
        useShowPortalBlock(dropdownsMountNodeId);

    return (
        <div ref={blockRef} className={styles.container} onClick={switchShow}>
            <div className={cn(styles.text, { [styles.opened]: show })}>
                {items[selectedKey] ? (
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
                            [styles.active]: show,
                        })}
                        width={18}
                        height={18}
                        color="var(--color-gray)"
                    />
                )}
            </div>
            {show && (
                <Items
                    show={show}
                    itemsContainerStyles={blockStyles}
                    items={items}
                    selectedKey={selectedKey}
                    setSelectedValue={setSelectedValue}
                />
            )}
        </div>
    );
};
