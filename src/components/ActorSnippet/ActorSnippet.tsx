import { Actor } from '@api/movieApi';
import { ImageSnippet } from '@components/ImageSnippet';
import { Text } from '@components/Text';

import styles from './ActorSnippet.module.css';

export const ActorSnippet = (props: Actor) => {
    const { name, photo } = props;
    return (
        <div className={styles.container}>
            <ImageSnippet size="m" src={photo} alt={name} />
            <Text size="xxs">{name}</Text>
        </div>
    );
};
