import { FC, useCallback, useLayoutEffect, useState } from 'react';

import { Input } from '@components/Input/Input';
import { SelectWrapper } from '@components/SelectWrapper';
import { useAppDispatch } from '@store/store';
import { setTitle } from '@store/search/searchSlice';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';

export const TitleFilter: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const debouncedSetTitle = useDebouncedCallback((title: string) => {
        dispatch(setTitle(title));

        if (!title) {
            setSearchParams((params) => {
                params.delete('title');
                return params;
            });

            return;
        }

        setSearchParams({ title });
    }, 500);

    useLayoutEffect(() => {
        const title = searchParams.get('title');

        if (title) {
            setInputValue(title);
            dispatch(setTitle(title));
        }
    }, []);

    const onChange = useCallback((value: string) => {
        setInputValue(value);
        debouncedSetTitle(value);
    }, []);

    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input
                id="title"
                value={inputValue}
                onChange={onChange}
                placeholder="Введите название"
            />
        </SelectWrapper>
    );
};
