import { useGetMovieListQuery } from '@api/movieApi';
import { MovieList } from '@components/MovieList';
import { Filters } from '@components/Filters';

import styles from './MainPage.module.css';

export const MainPage = () => {
    //TODO: переделать, пока для теста
    const { data } = useGetMovieListQuery({ page: 1 });

    return (
        <div className={styles.container}>
            <Filters />
            {data && <MovieList movieList={data.search_result} />}
        </div>
    );
};
