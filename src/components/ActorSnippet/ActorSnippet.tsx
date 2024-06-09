import { Actor } from '@api/movieApi.ts';
import { ImageSnippet } from '@components/ImageSnippet';
import { getMoviePosterUrl } from '@helpers/getMoviePosterUrl.ts';
import { Text } from '@components/Text';
import styles from './ActorSnippet.module.css';

type ActorsListProps = {
    actor: Actor;
};

export const ActorSnippet = (props: ActorsListProps) => {
    const { actor } = props;
    return (
        <div className={styles.container}>
            <ImageSnippet
                size="m"
                src={getMoviePosterUrl(actor.photo)}
                alt={actor.name}
            />
            <Text size="xxs">{actor.name}</Text>
        </div>
    );
};
