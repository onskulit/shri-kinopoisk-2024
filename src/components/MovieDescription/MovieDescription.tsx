import { FC } from 'react';

import { SpecificMovie } from '@api/movieApi';
import { Row } from '@components/Row';
import { Text } from '@components/Text';

import styles from './MovieDescription.module.css';

type MovieDescriptionProps = {
    movie: SpecificMovie;
};

const getRowTemplate = (
    key: string,
    value: string | number,
    withLineBreak: boolean = false
) => {
    const keyTemplate = (
        <Text key={key} weight="bold" size="s" as="span">
            {key}:
        </Text>
    );

    const valueTemplate = (
        <Text
            key={value}
            size={withLineBreak ? 'xs' : 's'}
            as={withLineBreak ? 'div' : 'span'}
        >
            {withLineBreak ? value : ` ${value}`}
        </Text>
    );

    const template = [keyTemplate, valueTemplate];

    return (
        <Text weight="bold" size="s">
            {template}
        </Text>
    );
};

export const MovieDescription: FC<MovieDescriptionProps> = ({ movie }) => {
    const { title, description, genre, rating, release_year } = movie;

    return (
        <div className={styles.container}>
            <Text weight="extrabold" size="xl">
                {title}
            </Text>
            <Row>{getRowTemplate('Жанр', genre)}</Row>
            <Row>{getRowTemplate('Год производства', release_year)}</Row>
            <Row>{getRowTemplate('Рейтинг', rating)}</Row>
            <Row>{getRowTemplate('Описание', description, true)}</Row>
        </div>
    );
};
