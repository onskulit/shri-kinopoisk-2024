import { WithClassName } from '@helpers/types.ts';
import { Actor } from '@api/movieApi.ts';
import styles from './ActorsList.module.css';
import cn from 'classnames';
import { ActorSnippet } from '@components/ActorSnippet';

type ActorsListProps = WithClassName & {
    actorsList: Actor[];
};

export const ActorsList = (props: ActorsListProps) => {
    const { actorsList, className } = props;
    return (
        <div className={cn(styles.container, className)}>
            {actorsList.map((actor, index) => (
                <ActorSnippet key={index} actor={actor} />
            ))}
        </div>
    );
};
