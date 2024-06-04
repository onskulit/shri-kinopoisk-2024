import { FC } from 'react';

import { BlockWrapper } from '@components/BlockWrapper/BlockWrapper';

import { Header } from '@components/Header';
import { GenresFilter } from './GenresFilter';
import { RatingFilter } from './RatingFilter';
import { TitleFilter } from './TitleFilter';

import styles from './Filters.module.css';

export const Filters: FC = () => (
    <BlockWrapper className={styles.container}>
        <Header as="h3">Фильтр поиска</Header>
        <div className={styles.selectors}>
            <TitleFilter />
            <GenresFilter />
            <RatingFilter />
        </div>
    </BlockWrapper>
);
