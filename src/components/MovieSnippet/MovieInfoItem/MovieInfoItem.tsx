import { FC } from 'react';

import { Text } from '@components/Text';

import styles from './MovieInfoItem.module.css';

type MovieInfoItemProps = {
    label: string;
    text: string | number;
};

export const MovieInfoItem: FC<MovieInfoItemProps> = ({ label, text }) => (
    <div className={styles.container}>
        <Text className={styles.label} size="xxs" color="grey" as="span">
            {label}
        </Text>
        <Text size="xxs">{text}</Text>
    </div>
);
