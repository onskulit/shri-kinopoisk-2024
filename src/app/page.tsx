import { FC } from 'react';

import { getMovieList, MovieListParams } from '@api/movieApi';
import { Filters } from '@components/Filters';
import { MovieList } from '@components/MovieList';
import { SearchInput } from '@components/SearchInput';

import styles from './page.module.css';

export const dynamic = 'force-dynamic';

type MainPageProps = {
    searchParams: MovieListParams;
};

const MainPage: FC<MainPageProps> = async ({ searchParams }) => {
    const { data, isError } = await getMovieList(searchParams);

    return (
        <div className={styles.container}>
            <Filters
                genre={searchParams.genre}
                releaseYear={searchParams.release_year}
            />
            <main className={styles.main}>
                <SearchInput searchParamsTitle={searchParams.title || ''} />
                <MovieList movieList={data} isError={isError} />
            </main>
        </div>
    );
};

export default MainPage;
