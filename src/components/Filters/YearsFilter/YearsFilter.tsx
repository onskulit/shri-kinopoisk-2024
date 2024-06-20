import { FC } from 'react';

import { Dropdown } from '@components/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

export const YearsFilter: FC = () => {
    const { param, setSearchParams } = useSetSearchParams('years');

    return (
        <SelectWrapper label="Годы">
            <Dropdown
                isLoading={false}
                selectedKey={param}
                items={YEARS_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите рейтинг"
            />
        </SelectWrapper>
    );
};
