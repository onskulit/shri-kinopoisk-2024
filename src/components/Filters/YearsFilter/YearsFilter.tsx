import { FC, useCallback, useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Dropdown } from '@components/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { selectYears, setYears } from '@store/search/searchSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

export const YearsFilter: FC = () => {
    const years = useAppSelector(selectYears);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        const years = searchParams.get('years');
        if (years) {
            dispatch(setYears(years));
        }
    }, [dispatch, searchParams]);

    const setSelectedValue = useCallback(
        (key: string) => dispatch(setYears(key)),
        []
    );

    return (
        <SelectWrapper label="Годы">
            <Dropdown
                isLoading={false}
                selectedKey={years}
                items={YEARS_MAP}
                setSelectedValue={setSelectedValue}
                placeholder="Выберите рейтинг"
            />
        </SelectWrapper>
    );
};
