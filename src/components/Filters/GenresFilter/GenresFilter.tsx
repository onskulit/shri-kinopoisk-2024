import { FC, useCallback } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';
import { GENRES_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';
import { selectGenre, setGenre } from '@store/searchSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

export const GenresFilter: FC = () => {
    const genre = useAppSelector(selectGenre);
    const dispatch = useAppDispatch();

    const setValue = useCallback(
        (key: string) => dispatch(setGenre(key)),
        [dispatch]
    );

    const { setSearchParams } = useSetSearchParams('genre', setValue);

    return (
        <SelectWrapper label="Жанры">
            <Dropdown
                isLoading={false}
                selectedKey={genre}
                items={GENRES_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите жанр"
            />
        </SelectWrapper>
    );
};
