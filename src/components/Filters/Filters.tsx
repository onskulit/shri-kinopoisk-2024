import { FC } from 'react';

import { BlockWrapper } from '@components/BlockWrapper/BlockWrapper';
import { Header } from '@components/Header';

import { GenresFilter } from './GenresFilter';
import { YearsFilter } from './YearsFilter';

import styles from './Filters.module.css';

export const Filters: FC = () => (
    <BlockWrapper className={styles.container}>
        <Header as="h3">Фильтр</Header>
        <div className={styles.selectors}>
            <GenresFilter />
            <YearsFilter />
        </div>
    </BlockWrapper>
);
