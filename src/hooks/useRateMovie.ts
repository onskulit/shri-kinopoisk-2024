import { useMemo } from 'react';

import { useRateMovieMutation } from '@api/movieApi';
import { LocalStorageKey } from '@helpers/localStorage';
import { assertIsDefined } from '@helpers/typesHelpers';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';

export const useRateMovie = (id?: string) => {
    const [handleRateMovie] = useRateMovieMutation();

    const initialRating = useMemo(() => {
        if (!id) {
            return 0;
        }

        const savedRatings = localStorage.getItem(
            LocalStorageKey.MoviesRatings
        );
        const parsed = savedRatings ? JSON.parse(savedRatings) : 0;

        return parsed[id] ?? 0;
    }, [id]);

    const fn = useDebouncedCallback(
        (newRate: number) => {
            assertIsDefined(id);

            if (newRate === initialRating) {
                return null;
            }

            handleRateMovie({
                movieId: id,
                user_rate: newRate,
            });
        },
        500,
        [id, handleRateMovie]
    );

    return [initialRating, fn];
};
