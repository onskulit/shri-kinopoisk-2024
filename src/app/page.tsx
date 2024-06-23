'use client';

import { Filters } from '@components/Filters';
import { MovieList } from '@components/MovieList';

import styles from './page.module.css';
import { SearchInput } from '@components/SearchInput';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <Filters />
            <main className={styles.main}>
                <SearchInput />
                <MovieList />
            </main>
        </div>
    );
};

export default MainPage;
