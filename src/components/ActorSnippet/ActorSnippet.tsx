import { Actor } from '@api/movieApi';
import { ImageSnippet } from '@components/ImageSnippet';
import { Text } from '@components/Text';

import styles from './ActorSnippet.module.css';

type ActorsListProps = {
    actor: Actor;
};

export const ActorSnippet = (props: ActorsListProps) => {
    const { actor } = props;
    return (
        <div className={styles.container}>
            <ImageSnippet size="m" src={actor.photo} alt={actor.name} />
            <Text size="xxs">{actor.name}</Text>
        </div>
    );
};
