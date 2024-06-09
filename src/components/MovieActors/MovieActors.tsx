import { WithClassName } from '@helpers/types.ts';
import styles from './MovieActors.module.css';
import { Text } from '@components/Text';
import { ActorsList } from '@components/ActorsList';
import cn from 'classnames';
import { useGetMovieActors } from '@hooks/useGetMovieActors.ts';

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
