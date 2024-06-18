import { FC, useCallback } from 'react';

import { Dropdown } from '@components/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { useSetSearchParams } from '@hooks/useSetSearchParams';
import { selectYears, setYears } from '@store/searchSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

export const YearsFilter: FC = () => {
    const years = useAppSelector(selectYears);
    const dispatch = useAppDispatch();

    const setValue = useCallback(
        (key: string) => dispatch(setYears(key)),
        [dispatch]
    );

    const { setSearchParams } = useSetSearchParams('years', setValue);

    return (
        <SelectWrapper label="Годы">
            <Dropdown
                isLoading={false}
                selectedKey={years}
                items={YEARS_MAP}
                setSelectedValue={setSearchParams}
                placeholder="Выберите рейтинг"
            />
        </SelectWrapper>
    );
};
