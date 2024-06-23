import { FC } from 'react';

import { Movie } from '@api/movieApi';
import { BlockWrapper } from '@components/BlockWrapper';
import { Header } from '@components/Header';
import { ImageSnippet } from '@components/ImageSnippet';
import { MovieRating } from '@components/MovieRating';

import { MovieInfoItem } from './MovieInfoItem';

import styles from './MovieSnippet.module.css';
import Link from 'next/link';

type MovieSnippetProps = Movie;

export const MovieSnippet: FC<MovieSnippetProps> = ({
    id,
    title,
    description,
    genre,
    poster,
    release_year: releaseYear,
}) => {
    const onStarsClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        e.preventDefault();

    return (
        <Link to={`/movie/${id}`}>
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
                <div onClick={onStarsClick} className={styles.stars}>
                    <MovieRating id={id} />
                </div>
            </BlockWrapper>
        </Link>
    );
};
