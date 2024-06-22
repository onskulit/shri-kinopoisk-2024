import { FC } from 'react';

import { Dropdown } from '@components/Dropdown';
import { FieldWrapper } from '@components/FieldWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

export const YearsFilter: FC = () => {
    const { param, setSearchParams } = useSetSearchParams('years');

    return (
        <FieldWrapper label="Годы">
            <Dropdown
                isLoading={false}
                selectedKey={param}
                items={YEARS_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите рейтинг"
            />
        </FieldWrapper>
    );
};
