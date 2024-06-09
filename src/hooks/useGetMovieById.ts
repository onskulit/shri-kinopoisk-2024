import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '@api/movieApi.ts';
import { assertIsDefined } from '@helpers/shared.ts';

export const useGetMovieById = () => {
    const { id } = useParams();

    assertIsDefined(id);

    const { data, isLoading, isError } = useGetMovieByIdQuery(id);

    if (!isLoading && !data) {
        return { isError: true };
    }

    return { movie: data, isLoading, isError };
};
