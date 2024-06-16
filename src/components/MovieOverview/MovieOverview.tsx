import cn from 'classnames';

import { ImageSnippet } from '@components/ImageSnippet';
import { MovieInfoBlock } from '@components/MovieInfoBlock';
import { getMoviePosterUrl } from '@helpers/getMoviePosterUrl';
import { WithClassName } from '@helpers/types';
import { useGetMovieById } from '@hooks/useGetMovieById';

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
            <MovieInfoBlock />
        </div>
    );
};
