import { FC } from 'react';
import { notFound } from 'next/navigation';

import { getMovieById, getMovieList } from '@api/movieApi';
import { MovieActors } from '@components/MovieActors';
import { MovieOverview } from '@components/MovieOverview';
import { PageBlocks } from '@components/PageBlocks';
import { PendingErrorGuard } from '@components/PendingErrorGuard';

import styles from './page.module.css';

type MoviePageProps = {
    params: {
        id?: string;
    };
};

export const generateStaticParams = async () => {
    const { data } = await getMovieList();

    return (data?.search_result || []).map(({ id }) => ({ id }));
};

const MoviePage: FC<MoviePageProps> = async ({ params }) => {
    const { id } = params;

    if (!id) {
        notFound();
    }

    const { movie, isError } = await getMovieById(id);

    return (
        <PendingErrorGuard isError={isError}>
            <PageBlocks className={styles.container}>
                <MovieOverview movie={movie} />
                <MovieActors actors={movie?.actors || []} />
            </PageBlocks>
        </PendingErrorGuard>
    );
};

export default MoviePage;
