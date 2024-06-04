import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '@api/movieApi';
import { Header } from '@components/Header';
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
            <Header as="h2">{title}</Header>
            <Text as="span" size="xs" style="italic">
                {genre}
            </Text>
            <Text as="p" size="xs">
                {description}
            </Text>
        </BlockWrapper>
    </Link>
);
