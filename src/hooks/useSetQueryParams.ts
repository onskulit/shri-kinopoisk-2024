import { filterParamsSelector } from '@store/search/searchSlice';
import { useAppSelector } from '@store/store';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSetSearchParams = () => {
    const [_, setSearchParams] = useSearchParams();
    const { title, genre, years, page } = useAppSelector(filterParamsSelector);

    useEffect(() => {
        const query = new URLSearchParams();

        if (title) {
            query.set('title', title);
        }

        if (page > 1) {
            query.set('page', page.toString());
        }

        if (genre && genre !== '0') {
            query.set('genre', genre);
        }

        if (years && years !== '0') {
            query.set('years', years);
        }

        setSearchParams(query);
    }, [genre, page, setSearchParams, title, years]);
};
