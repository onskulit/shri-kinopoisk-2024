import { useCallback, useRef } from 'react';

export const useDebouncedCallback = <Params extends unknown[]>(
    func: (...args: Params) => unknown,
    delay: number,
    deps: unknown[]
) => {
    const timeout = useRef<NodeJS.Timeout>();

    return useCallback(
        (...args: Params) => {
            const later = () => {
                clearTimeout(timeout.current);
                func(...args);
            };

            clearTimeout(timeout.current);
            timeout.current = setTimeout(later, delay);
        },
        [...deps, delay]
    );
};
