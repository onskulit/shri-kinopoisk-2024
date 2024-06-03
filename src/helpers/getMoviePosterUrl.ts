import { apiUrl } from './env';

export const getMoviePosterUrl = (id: string) =>
    `${apiUrl}/static/images/${id}.jpeg`;
