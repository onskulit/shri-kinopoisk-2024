import { FC, useCallback, useLayoutEffect } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';
import { YEARS_MAP } from '@helpers/consts';
import { useAppDispatch, useAppSelector } from '@store/store';
import { selectYears, setYears } from '@store/search/searchSlice';
import { useSearchParams } from 'react-router-dom';

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
