export const setScrollToTop = () => {
    if (typeof window !== 'undefined') {
        window?.scrollTo(0, 0);
    }
};
