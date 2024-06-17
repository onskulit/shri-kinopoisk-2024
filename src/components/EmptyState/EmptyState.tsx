import { FC } from 'react';

import { EmptyStateIcon } from '@components/EmptyStateIcon';
import { Header } from '@components/Header';
import { Text } from '@components/Text';

import styles from './EmptyState.module.css';

type EmptyStateProps = {
    title?: string;
    description?: string;
};

export const EmptyState: FC<EmptyStateProps> = ({ title, description }) => (
    <div className={styles.container}>
        <EmptyStateIcon width={100} height={100} color="secondary" />
        {title && <Header as="h1">{title}</Header>}
        {description && <Text size="m">{description}</Text>}
    </div>
);
