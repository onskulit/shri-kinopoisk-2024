import { Actor } from '@api/movieApi';
import { ActorSnippet } from '@components/ActorSnippet';
import { Carousel } from '@components/Carousel';
import { WithClassName } from '@helpers/types';

type ActorsListProps = WithClassName & {
    actorsList: Actor[];
};

export const ActorsList = (props: ActorsListProps) => {
    const { actorsList } = props;
    return (
        <Carousel>
            {actorsList.map((actor, index) => (
                <ActorSnippet
                    key={index}
                    name={actor.name}
                    photo={actor.photo}
                />
            ))}
        </Carousel>
    );
};
