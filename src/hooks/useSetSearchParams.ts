import { useCallback, useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type Key = 'title' | 'genre' | 'years' | 'page';

export const useSetSearchParams = (
    key: Key,
    setValue: (value: string) => void
) => {
    const [params, setParams] = useSearchParams();

    useLayoutEffect(() => {
        const paramValue = params.get(key);
        if (paramValue) {
            setValue(paramValue);
        }
    }, []);

    const setSearchParams = useCallback(
        (value: string) => {
            setParams((prev) => {
                if (
                    (key === 'title' && value === '') ||
                    (key !== 'title' && value === '0')
                ) {
                    prev.delete(key);

                    return prev;
                }

                prev.set(key, value);

                return prev;
            });
            setValue(value);
        },
        [setParams]
    );

    return { setSearchParams };
};
