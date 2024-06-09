import { ImageSnippet } from '@components/ImageSnippet';
import { MovieDescription } from '@components/MovieDescription';
import { getMoviePosterUrl } from '@helpers/getMoviePosterUrl.ts';
import { WithClassName } from '@helpers/types.ts';
import { useGetMovieById } from '@hooks/useGetMovieById.ts';
import cn from 'classnames';

import styles from './MovieOverview.module.css';

type MovieOverviewProps = WithClassName;

export const MovieOverview = (props: MovieOverviewProps) => {
    const { className } = props;
    const { movie } = useGetMovieById();

    if (!movie) {
        return null;
    }

    return (
        <div className={cn(styles.container, className)}>
            <ImageSnippet
                size="xl"
                src={getMoviePosterUrl(movie.id)}
                alt={`poster-${movie.title}`}
            />
            <MovieDescription movie={movie} />
        </div>
    );
};
