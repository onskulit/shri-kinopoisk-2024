import { FC } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { FieldWrapper } from '@components/FieldWrapper/FieldWrapper';
import { GENRES_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

export const GenresFilter: FC = () => {
    const { param, setSearchParams } = useSetSearchParams('genre');

    return (
        <FieldWrapper label="Жанры">
            <Dropdown
                isLoading={false}
                selectedKey={param}
                items={GENRES_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите жанр"
            />
        </FieldWrapper>
    );
};
