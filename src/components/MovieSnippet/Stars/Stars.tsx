'use client';

import { FC } from 'react';

import { MovieRating } from '@components/MovieRating';

import styles from './Stars.module.css';

type StarsProps = {
    id: string;
};

export const Stars: FC<StarsProps> = ({ id }) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        e.preventDefault();

    return (
        <div onClick={onClick} className={styles.container}>
            <MovieRating id={id} />
        </div>
    );
};
