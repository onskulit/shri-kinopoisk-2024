export const debounce = <Params extends unknown[]>(
    func: (...args: Params) => unknown,
    timeout: number
) => {
    let timer: NodeJS.Timeout;
    return (...args: Params) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    };
};
