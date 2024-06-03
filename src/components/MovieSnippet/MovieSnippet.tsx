import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '@api/movieApi';
import { Text } from '@components/Text';
import { BlockWrapper } from '@components/BlockWrapper';
import { getMoviePosterUrl } from '@helpers/getMoviePosterUrl';
import styles from './MovieSnippet.module.css';

type MovieSnippetProps = Movie;

export const MovieSnippet: FC<MovieSnippetProps> = ({
    id,
    title,
    description,
    genre,
}) => (
    <Link to={`/movie/${id}`}>
        <BlockWrapper className={styles.container}>
            <img className={styles.poster} src={getMoviePosterUrl(id)} />
            <Text as="h3" size="s" weight="bold">
                {title}
            </Text>
            <Text as="span" size="xs" className={styles.genre}>
                {genre}
            </Text>
            <Text as="p" size="xs">
                {description}
            </Text>
        </BlockWrapper>
    </Link>
);
