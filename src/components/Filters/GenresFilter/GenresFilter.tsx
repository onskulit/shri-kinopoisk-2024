import { FC } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';
import { GENRES_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

export const GenresFilter: FC = () => {
    const { param, setSearchParams } = useSetSearchParams('genre');

    return (
        <SelectWrapper label="Жанры">
            <Dropdown
                isLoading={false}
                selectedKey={param}
                items={GENRES_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите жанр"
            />
        </SelectWrapper>
    );
};
