import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '@api/movieApi';
import { BlockWrapper } from '@components/BlockWrapper';
import { Header } from '@components/Header';

import { MovieInfoItem } from './MovieInfoItem';

import styles from './MovieSnippet.module.css';

type MovieSnippetProps = Movie;

export const MovieSnippet: FC<MovieSnippetProps> = ({
    id,
    title,
    description,
    genre,
    poster,
    release_year,
}) => (
    <Link to={`/movie/${id}`}>
        <BlockWrapper className={styles.container}>
            <img className={styles.poster} src={poster} />
            <Header as="h2">{title}</Header>
            <div className={styles.info}>
                <MovieInfoItem label="Жанр" text={genre} />
                <MovieInfoItem label="Год выпуска" text={release_year} />
                <MovieInfoItem label="Описание" text={description} />
            </div>
        </BlockWrapper>
    </Link>
);
