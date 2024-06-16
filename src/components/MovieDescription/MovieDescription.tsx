import { Row } from '@components/Row';
import { Text } from '@components/Text';
import { useGetMovieById } from '@hooks/useGetMovieById';

import styles from './MovieDescription.module.css';

const getRowTemplate = (
    key: string,
    value: string | number,
    withLineBreak: boolean = false
) => {
    const template = [`${key}:`, withLineBreak ? <br key={key} /> : ' ', value];
    return (
        <Text weight="light" size="xxs">
            {template}
        </Text>
    );
};

export const MovieDescription = () => {
    const { movie } = useGetMovieById();

    if (!movie) {
        return null;
    }

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
