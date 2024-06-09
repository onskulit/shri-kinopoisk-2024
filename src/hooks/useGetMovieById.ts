import { useParams } from 'react-router-dom';
import { assertIsDefined } from '@helpers/shared.ts';
import { useGetMovieByIdQuery } from '@api/movieApi.ts';

export const useGetMovieById = () => {
    const { id } = useParams();

    assertIsDefined(id);

    const { data, isLoading, isError } = useGetMovieByIdQuery(id);

    if (!isLoading && !data) {
        return { isError: true };
    }

    return { movie: data, isLoading, isError };
};
