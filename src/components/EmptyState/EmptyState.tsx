import { FC } from 'react';

import styles from './EmptyState.module.css';
import { EmptyStateIcon } from '@components/EmptyStateIcon';
import { Text } from '@components/Text';
import { Header } from '@components/Header';

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
