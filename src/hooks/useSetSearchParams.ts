import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { revalidateMainPage } from 'src/app/actions';

type Key = 'title' | 'genre' | 'release_year' | 'page';

export const useSetSearchParams = (key: Key) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const param = searchParams?.get(key) || undefined;

    const setSearchParams = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams?.toString());
            if (
                (key === 'title' && value === '') ||
                (key !== 'title' && value === '0')
            ) {
                params.delete(key);
            } else {
                params.set(key, value);
            }

            // обнуляем значение page, если прокидываем новое значение фильтра
            if (key === 'genre' || key === 'release_year') {
                params.delete('page');
            }

            if (params.size === 0) {
                revalidateMainPage();
            }

            replace(`${pathname}?${params.toString()}`);
        },
        [searchParams, key, param, pathname]
    );

    return { param, setSearchParams };
};
