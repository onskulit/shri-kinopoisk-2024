import { FC, useCallback, useLayoutEffect } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';
import { GENRES_MAP } from '@helpers/consts';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectGenre, setGenre } from '@store/search/searchSlice';
import { useSearchParams } from 'react-router-dom';

export const GenresFilter: FC = () => {
    const genre = useAppSelector(selectGenre);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        const genre = searchParams.get('genre');
        if (genre) {
            dispatch(setGenre(genre));
        }
    }, [dispatch, searchParams]);

    const setSelectedValue = useCallback(
        (key: string) => dispatch(setGenre(key)),
        []
    );

    return (
        <SelectWrapper label="Жанры">
            <Dropdown
                isLoading={false}
                selectedKey={genre}
                items={GENRES_MAP}
                setSelectedValue={setSelectedValue}
                placeholder="Выберите жанр"
            />
        </SelectWrapper>
    );
};
