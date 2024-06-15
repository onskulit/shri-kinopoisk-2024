import cn from 'classnames';

import { ActorsList } from '@components/ActorsList';
import { Text } from '@components/Text';
import { WithClassName } from '@helpers/types';
import { useGetMovieActors } from '@hooks/useGetMovieActors';

import styles from './MovieActors.module.css';

type MovieActorsProps = WithClassName;

export const MovieActors = (props: MovieActorsProps) => {
    const { className } = props;
    const actors = useGetMovieActors();

    return (
        <div className={cn(styles.container, className)}>
            <Text size="l" weight="bold">
                Актёры
            </Text>
            <ActorsList actorsList={actors} />
        </div>
    );
};
