import { useMemo } from 'react';
import { useParams } from 'next/navigation';

import { useGetMovieByIdQuery } from '@api/movieApi';
import { assertIsDefined } from '@helpers/typesHelpers';

export const useGetMovieById = () => {
    const params = useParams<{ id: string }>();

    assertIsDefined(params?.id);

    const { data, isLoading, isError } = useGetMovieByIdQuery(params?.id);

    return useMemo(
        () => ({ movie: data, isLoading, isError }),
        [data, isLoading, isError]
    );
};
