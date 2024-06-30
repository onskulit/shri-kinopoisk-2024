'use client';

import { FC, useCallback, useLayoutEffect, useState } from 'react';

import { Input } from '@components/Input/Input';
import { SearchIcon } from '@components/SearchIcon';
import { useDebouncedCallback } from '@hooks/useDebouncedCallback';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

import styles from './SearchInput.module.css';

export const SearchInput: FC = () => {
    const [title, setTitle] = useState('');

    const { param, setSearchParams } = useSetSearchParams('title');

    const debouncedSetTitle = useDebouncedCallback(
        (title: string) => setSearchParams(title),
        500
    );

    useLayoutEffect(() => setTitle(param || ''), [param]);

    const onChange = useCallback(
        (value: string) => {
            setTitle(value);
            debouncedSetTitle(value);
        },
        [debouncedSetTitle, setTitle]
    );

    return (
        <div className={styles.container}>
            <Input
                icon={
                    <SearchIcon
                        width={16}
                        height={16}
                        color="secondary-light"
                    />
                }
                id="title"
                value={title}
                onChange={onChange}
                placeholder="Название фильма"
                isClearable
            />
        </div>
    );
};
