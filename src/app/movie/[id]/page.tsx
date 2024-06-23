'use client';

import { MovieActors } from '@components/MovieActors';
import { MovieOverview } from '@components/MovieOverview';
import { PageBlocks } from '@components/PageBlocks';
import { Spinner } from '@components/Spinner';
import { useGetMovieById } from '@hooks/useGetMovieById';

import styles from './page.module.css';

const MoviePage = () => {
    const { isLoading, isError } = useGetMovieById();

    if (isLoading) {
        return <Spinner className={styles.loader} />;
    }

    if (isError) {
        return 'Error fetching movie!';
    }

    return (
        <PageBlocks className={styles.container}>
            <MovieOverview />
            <MovieActors />
        </PageBlocks>
    );
};

export default MoviePage;
