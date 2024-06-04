import cn from 'classnames';
import { FC, CSSProperties, PropsWithChildren } from 'react';

import { Portal } from '@components/Portal/Portal';

import { dropdownsMountNodeId } from '@helpers/consts';
import { useCreateNodeWithId } from '@hooks/useCreateNodeWithId';
import { Text } from '@components/Text';

import styles from './Items.module.css';

type ItemsProps = {
    show: boolean;
    itemsContainerStyles: CSSProperties;
    items: Record<string, string>;
    selectedKey: string;
    setSelectedValue: (key: string) => void;
} & PropsWithChildren;

export const Items: FC<ItemsProps> = ({
    show,
    itemsContainerStyles,
    items,
    selectedKey,
    setSelectedValue,
}) => {
    const node = useCreateNodeWithId(dropdownsMountNodeId);

    return (
        <Portal mountElement={node}>
            <ul
                className={cn(styles.container, {
                    [styles.hide]: !show,
                })}
                style={itemsContainerStyles}
            >
                {Object.entries(items).map(([key, value]) => (
                    <Text
                        as="li"
                        onClick={() => setSelectedValue(key)}
                        className={cn(styles.item, {
                            [styles.selected]: selectedKey === key,
                        })}
                        key={key}
                    >
                        {value}
                    </Text>
                ))}
            </ul>
        </Portal>
    );
};
