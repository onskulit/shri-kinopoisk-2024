import styles from './MoviePage.module.css';
import { PageBlockItem } from '@components/PageBlockItem';
import { PageBlocks } from '@components/PageBlocks';
import { MovieActors } from '@components/MovieActors';
import { MovieOverview } from '@components/MovieOverview';
import { Spinner } from '@components/Spinner';
import { useGetMovieById } from '@hooks/useGetMovieById.ts';

export const MoviePage = () => {
    const { isLoading, isError } = useGetMovieById();

    if (isLoading) {
        return <Spinner className={styles.loader} />;
    }

    if (isError) {
        return 'Error fetching movie. Try again!';
    }

    return (
        <PageBlocks className={styles.container}>
            <PageBlockItem>
                <MovieOverview />
            </PageBlockItem>
            <PageBlockItem>
                <MovieActors />
            </PageBlockItem>
        </PageBlocks>
    );
};
