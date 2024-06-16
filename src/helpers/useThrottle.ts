import { useCallback, useRef } from 'react';

export const useThrottle = <Args extends unknown[]>(
    cb: (...args: Args) => void,
    cooldown: number,
    deps: unknown[]
) => {
    const lastArgs = useRef<Args | undefined>(undefined);
    const isFirstRun = useRef(true);

    const run = useCallback(() => {
        if (lastArgs.current) {
            cb(...lastArgs.current);
            lastArgs.current = undefined;
        }
    }, [cb]);

    return useCallback((...args: Args) => {
        const isOnCooldown = !!lastArgs.current;

        lastArgs.current = args;

        if (isOnCooldown) {
            return;
        }

        if (isFirstRun.current) {
            isFirstRun.current = false;
            run();
        }

        window.setTimeout(run, cooldown);
    }, deps);
};
