import { FC } from 'react';

import { BlockWrapper } from '@components/BlockWrapper/BlockWrapper';
import { Header } from '@components/Header';

import { GenresFilter } from './GenresFilter';
import { YearsFilter } from './YearsFilter';

import styles from './Filters.module.css';

type FiltersProps = {
    genre?: string;
    releaseYear?: string;
};

export const Filters: FC<FiltersProps> = ({ genre, releaseYear }) => (
    <BlockWrapper className={styles.container}>
        <Header as="h3">Фильтр</Header>
        <div className={styles.selectors}>
            <GenresFilter genre={genre} />
            <YearsFilter releaseYear={releaseYear} />
        </div>
    </BlockWrapper>
);
