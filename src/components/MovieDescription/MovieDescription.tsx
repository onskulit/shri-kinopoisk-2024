import { WithClassName } from '@helpers/types.ts';
import styles from './MovieDescription.module.css';
import { Text } from '@components/Text';
import cn from 'classnames';
import { Row } from '@components/Row';
import { SpecificMovie } from '@api/movieApi.ts';

type MovieDescriptionProps = WithClassName & {
    movie: SpecificMovie;
};

const getRowTemplate = (
    key: string,
    value: string | number,
    withLineBreak: boolean = false
) => {
    const template = [`${key}:`, withLineBreak ? <br key={key}/> : ' ', value];
    return (
        <Text weight="light" size="xxs">
            {template}
        </Text>
    );
};

export const MovieDescription = (props: MovieDescriptionProps) => {
    const { movie, className } = props;
    const { title, description, genre, rating, release_year } = movie;

    return (
        <div className={cn(styles.container, className)}>
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
