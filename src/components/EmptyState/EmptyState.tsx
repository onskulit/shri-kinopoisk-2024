import { FC } from 'react';

import { Header } from '@components/Header';
import { Text } from '@components/Text';

import styles from './EmptyState.module.css';

type EmptyStateProps = {
    title?: string;
    description?: string;
};

export const EmptyState: FC<EmptyStateProps> = ({ title, description }) => (
    <div className={styles.container}>
        {title && <Header as="h3">{title}</Header>}
        {description && (
            <Text size="xxs" color="grey">
                {description}
            </Text>
        )}
    </div>
);
