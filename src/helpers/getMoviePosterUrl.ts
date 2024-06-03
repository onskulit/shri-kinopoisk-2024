import { apiHost } from './env';

export const getMoviePosterUrl = (id: string) =>
    `${apiHost}/static/images/${id}.jpeg`;
