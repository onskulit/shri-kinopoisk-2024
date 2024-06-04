import { FC, useCallback, useEffect, useState } from 'react';

import { Input } from '@components/Input/Input';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';

export const TitleFilter: FC = () => {
    // TODO: переделать на хук и использование стора
    const [title, setTitle] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(title);

    useEffect(() => {
        const handler = setTimeout(() => {
            setTitle(debouncedValue);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [debouncedValue]);

    const onChange = useCallback(
        (value: string): void => setDebouncedValue(value),
        []
    );

    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input
                id="title"
                value={debouncedValue}
                onChange={onChange}
                placeholder="Введите название"
            />
        </SelectWrapper>
    );
};
