'use client';

import { useMemo } from 'react';

import { rateMovie } from '@api/movieApi';
import { isClient } from '@helpers/isClient.ts';
import { LocalStorageKey } from '@helpers/localStorage';
import { assertIsDefined } from '@helpers/typesHelpers';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';

export const useRateMovie = (id?: string) => {
    const initialRating = useMemo(() => {
        if (!id || !isClient) {
            return 0;
        }

        const savedRatings = localStorage.getItem(
            LocalStorageKey.MoviesRatings
        );

        const parsed = savedRatings ? JSON.parse(savedRatings) : 0;
        return parsed[id] ?? 0;
    }, [id]);

    const fn = useDebouncedCallback(
        async (newRate: number) => {
            assertIsDefined(id);

            if (newRate === initialRating) {
                return null;
            }

            const { isError } = await rateMovie({
                movieId: id,
                userRate: newRate,
            });

            if (isError) {
                return;
            }

            // В случае успешного апдейта рейтинга на сервере, сохраняем оценку в localStorage
            saveNewRate(id, newRate);
        },
        500,
        [id]
    );

    return [initialRating, fn];
};

function saveNewRate(movieId: string, newRate: number) {
    const storedRatings = localStorage.getItem(LocalStorageKey.MoviesRatings);
    const parsedObject = storedRatings ? JSON.parse(storedRatings) : {};

    parsedObject[movieId] = newRate;
    localStorage.setItem(
        LocalStorageKey.MoviesRatings,
        JSON.stringify(parsedObject)
    );
}
