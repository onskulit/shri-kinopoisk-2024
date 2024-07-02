'use client';

import { useEffect, useMemo, useState } from 'react';

import { useRateMovieMutation } from '@api/movieApi';
import { LocalStorageKey } from '@helpers/localStorage';
import { assertIsDefined } from '@helpers/typesHelpers';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';

export const useRateMovie = (id?: string) => {
    const [handleRateMovie] = useRateMovieMutation();
    const [savedRatings, setSavedRatings] = useState('0');

    useEffect(() => {
        setSavedRatings(
            localStorage.getItem(LocalStorageKey.MoviesRatings) || '0'
        );
    }, []);

    const initialRating = useMemo(() => {
        if (!id) {
            return 0;
        }

        const parsed = savedRatings ? JSON.parse(savedRatings) : 0;

        return parsed[id] ?? 0;
    }, [id, savedRatings]);

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
