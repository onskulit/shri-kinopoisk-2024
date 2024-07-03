'use client';

import { FC } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { FieldWrapper } from '@components/FieldWrapper/FieldWrapper';
import { GENRES_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

type GenresFilterProps = {
    genre?: string;
};

export const GenresFilter: FC<GenresFilterProps> = ({ genre }) => {
    const { setSearchParams } = useSetSearchParams('genre');

    return (
        <FieldWrapper label="Жанр">
            <Dropdown
                isLoading={false}
                selectedKey={genre}
                items={GENRES_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите жанр"
            />
        </FieldWrapper>
    );
};
