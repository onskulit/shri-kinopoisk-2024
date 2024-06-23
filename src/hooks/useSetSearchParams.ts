import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type Key = 'title' | 'genre' | 'years' | 'page';

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
                console.log(value);

                params.delete(key);
            } else {
                params.set(key, value);
            }

            replace(`${pathname}?${params.toString()}`);
        },
        [searchParams, key, param, pathname]
    );

    return { param, setSearchParams };
};
