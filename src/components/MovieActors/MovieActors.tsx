import cn from 'classnames';

import { Actor } from '@api/movieApi';
import { ActorsList } from '@components/ActorsList';
import { Text } from '@components/Text';
import { WithClassName } from '@helpers/types';

import styles from './MovieActors.module.css';

type MovieActorsProps = {
    actors: Actor[];
} & WithClassName;

export const MovieActors = (props: MovieActorsProps) => {
    const { className, actors } = props;

    return (
        <div className={cn(styles.container, className)}>
            <Text size="l" weight="bold">
                Актёры
            </Text>
            <ActorsList actorsList={actors} />
        </div>
    );
};
