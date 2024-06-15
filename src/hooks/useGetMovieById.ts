import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useGetMovieByIdQuery } from '@api/movieApi';
import { assertIsDefined } from '@helpers/typesHelpers';

export const useGetMovieById = () => {
    const { id } = useParams();

    assertIsDefined(id);

    const { data, isLoading, isError } = useGetMovieByIdQuery(id);

    return useMemo(
        () => ({ movie: data, isLoading, isError }),
        [data, isLoading, isError]
    );
};
