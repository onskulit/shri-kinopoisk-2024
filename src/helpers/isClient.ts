export const isClient = () => {
    return window && typeof window !== 'undefined'
}