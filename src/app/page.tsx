import { Suspense } from 'react';

import { getMovieList, MovieListParams } from '@api/movieApi';
import { Filters } from '@components/Filters';
import { MovieList } from '@components/MovieList';
import { SearchInput } from '@components/SearchInput';

import styles from './page.module.css';

type MainPageProps = {
    searchParams: MovieListParams;
};

const MainPage = async ({ searchParams }: MainPageProps) => {
    const { data, isError } = await getMovieList(searchParams);

    return (
        <div className={styles.container}>
            <Filters />
            <main className={styles.main}>
                <Suspense>
                    <SearchInput />
                </Suspense>
                <MovieList
                    searchResult={data?.search_result}
                    isError={isError}
                />
            </main>
        </div>
    );
};

export default MainPage;
