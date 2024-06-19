import { FC, useCallback, useState } from 'react';

import { Input } from '@components/Input/Input';
import { SelectWrapper } from '@components/SelectWrapper';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

export const TitleFilter: FC = () => {
    const [title, setTitle] = useState('');

    const { setSearchParams } = useSetSearchParams('title');

    const debouncedSetTitle = useDebouncedCallback(
        (title: string) => setSearchParams(title),
        500
    );

    const onChange = useCallback(
        (value: string) => {
            setTitle(value);
            debouncedSetTitle(value);
        },
        [debouncedSetTitle, setTitle]
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
