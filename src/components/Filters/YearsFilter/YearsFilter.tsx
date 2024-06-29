import { FC } from 'react';

import { Dropdown } from '@components/Dropdown';
import { FieldWrapper } from '@components/FieldWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

export const YearsFilter: FC = () => {
    const { param, setSearchParams } = useSetSearchParams('release_year');

    return (
        <FieldWrapper label="Год">
            <Dropdown
                isLoading={false}
                selectedKey={param}
                items={YEARS_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите год"
            />
        </FieldWrapper>
    );
};
