import { FC, useCallback } from 'react';

import { Input } from '@components/Input/Input';
import { SelectWrapper } from '@components/SelectWrapper';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';
import { useSetSearchParams } from '@hooks/useSetSearchParams';
import { selectTitle, setTitle } from '@store/searchSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

export const TitleFilter: FC = () => {
    const title = useAppSelector(selectTitle);
    const dispatch = useAppDispatch();

    const setValue = useCallback(
        (key: string) => dispatch(setTitle(key)),
        [dispatch]
    );
    const { setSearchParams } = useSetSearchParams('title', setValue);

    const debouncedSetTitle = useDebouncedCallback(
        (title: string) => setSearchParams(title),
        500
    );

    const onChange = useCallback(
        (value: string) => {
            setValue(value);
            debouncedSetTitle(value);
        },
        [debouncedSetTitle, setValue]
    );

    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input
                id="title"
                value={title}
                onChange={onChange}
                placeholder="Введите название"
            />
        </SelectWrapper>
    );
};
