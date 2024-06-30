import cn from 'classnames';

import { SpecificMovie } from '@api/movieApi';
import { ImageSnippet } from '@components/ImageSnippet';
import { MovieDescription } from '@components/MovieDescription';
import { getMoviePosterUrl } from '@helpers/getMoviePosterUrl';
import { WithClassName } from '@helpers/types';

import styles from './MovieOverview.module.css';

type MovieOverviewProps = {
    movie?: SpecificMovie;
} & WithClassName;

export const MovieOverview = async (props: MovieOverviewProps) => {
    const { className, movie } = props;

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
