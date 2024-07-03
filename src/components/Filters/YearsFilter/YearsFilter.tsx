'use client';

import { FC } from 'react';

import { Dropdown } from '@components/Dropdown';
import { FieldWrapper } from '@components/FieldWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

type YearsFilterProps = {
    releaseYear?: string;
};

export const YearsFilter: FC<YearsFilterProps> = ({ releaseYear }) => {
    const { setSearchParams } = useSetSearchParams('release_year');

    return (
        <FieldWrapper label="Год">
            <Dropdown
                isLoading={false}
                selectedKey={releaseYear}
                items={YEARS_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите год"
            />
        </FieldWrapper>
    );
};
