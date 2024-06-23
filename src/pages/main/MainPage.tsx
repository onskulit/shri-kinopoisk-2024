import { Filters } from '@components/Filters';
import { MovieList } from '@components/MovieList';
import { SearchInput } from '@components/SearchInput';

import styles from './MainPage.module.css';

export const MainPage = () => (
    <div className={styles.container}>
        <Filters />
        <main className={styles.main}>
            <SearchInput />
            <MovieList />
        </main>
    </div>
);
