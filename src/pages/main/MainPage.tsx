import { MovieList } from '@components/MovieList';
import { Filters } from '@components/Filters';

import styles from './MainPage.module.css';

export const MainPage = () => (
    <div className={styles.container}>
        <Filters />
        {<MovieList />}
    </div>
);
