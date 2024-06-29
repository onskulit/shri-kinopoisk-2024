import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type Key = 'title' | 'genre' | 'years' | 'page';

export const useSetSearchParams = (key: Key) => {
    const [params, setParams] = useSearchParams();
    const param = params.get(key) || undefined;

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

                // обнуляем значение page, если прокидываем новое значение фильтра
                if (key === 'genre' || key === 'years') {
                    prev.delete('page');
                }

                return prev;
            });
        },
        [setParams]
    );

    return { param, setSearchParams };
};
