import { FC } from 'react';
import Link from 'next/link';

import { Movie } from '@api/movieApi';
import { BlockWrapper } from '@components/BlockWrapper';
import { Header } from '@components/Header';
import { ImageSnippet } from '@components/ImageSnippet';
import { getMoviePosterUrl } from '@helpers/getMoviePosterUrl';

import { MovieInfoItem } from './MovieInfoItem';
import { Stars } from './Stars';

import styles from './MovieSnippet.module.css';

type MovieSnippetProps = Movie;

export const MovieSnippet: FC<MovieSnippetProps> = ({
    id,
    title,
    description,
    genre,
    release_year: releaseYear,
}) => {
    return (
        <Link href={`/movie/${id}`}>
            <BlockWrapper className={styles.container}>
                <ImageSnippet
                    alt="Постер фильма"
                    size="s"
                    className={styles.poster}
                    src={getMoviePosterUrl(id)}
                />
                <Header as="h2">{title}</Header>
                <div className={styles.info}>
                    <MovieInfoItem label="Жанр" value={genre} />
                    <MovieInfoItem label="Год выпуска" value={releaseYear} />
                    <MovieInfoItem label="Описание" value={description} />
                </div>
                <Stars id={id} />
            </BlockWrapper>
        </Link>
    );
};
