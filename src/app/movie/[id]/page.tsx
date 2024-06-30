import { getMovie, getMovieList } from '@api/movieApi';
import { ErrorText } from '@components/ErrorText';
import { MovieActors } from '@components/MovieActors';
import { MovieOverview } from '@components/MovieOverview';
import { PageBlockItem } from '@components/PageBlockItem';
import { PageBlocks } from '@components/PageBlocks';

import styles from './page.module.css';

type MoviePageProps = {
    params: {
        id: string;
    };
};

export async function generateStaticParams() {
    const { data } = await getMovieList();

    return (data?.search_result || []).map(({ id }) => ({ id }));
}

const MoviePage = async ({ params }: MoviePageProps) => {
    const { movie, isError } = await getMovie(params.id);

    if (isError) {
        return <ErrorText />;
    }

    return (
        <PageBlocks className={styles.container}>
            <PageBlockItem>
                <MovieOverview movie={movie} />
            </PageBlockItem>
            <PageBlockItem>
                <MovieActors actors={movie?.actors || []} />
            </PageBlockItem>
        </PageBlocks>
    );
};

export default MoviePage;
