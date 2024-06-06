import { useGetMovieListQuery } from '@api/movieApi';
import { FC } from 'react';
import { MovieSnippet } from '../MovieSnippet';
import styles from './MovieList.module.css';
import { useAppSelector } from '@store/store';

export const MovieList: FC = () => {
    const title = useAppSelector((state) => state.search.title);

    const { data } = useGetMovieListQuery({ page: 1, title });

    return (
        <section className={styles.container}>
            {data?.search_result.map((movie) => (
                <MovieSnippet key={movie.id} {...movie} />
            ))}
        </section>
    );
};
