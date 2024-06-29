import { FC } from 'react';
import Link from 'next/link';

import { Movie } from '@api/movieApi';
import { BlockWrapper } from '@components/BlockWrapper';
import { Header } from '@components/Header';
import { ImageSnippet } from '@components/ImageSnippet';

import { MovieInfoItem } from './MovieInfoItem';

import styles from './MovieSnippet.module.css';

type MovieSnippetProps = Movie;

export const MovieSnippet: FC<MovieSnippetProps> = ({
    id,
    title,
    description,
    genre,
    poster,
    release_year: releaseYear,
}) => (
    <Link href={`/movie/${id}`}>
        <BlockWrapper className={styles.container}>
            <ImageSnippet
                alt="Постер фильма"
                size="s"
                className={styles.poster}
                src={poster}
            />
            <Header as="h2">{title}</Header>
            <div className={styles.info}>
                <MovieInfoItem label="Жанр" value={genre} />
                <MovieInfoItem label="Год выпуска" value={releaseYear} />
                <MovieInfoItem label="Описание" value={description} />
            </div>
        </BlockWrapper>
    </Link>
);
