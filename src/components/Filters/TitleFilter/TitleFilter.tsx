import { FC, useState } from 'react';

import { Input } from '@components/Input/Input';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';

export const TitleFilter: FC = () => {
    // TODO: переделать на хук и использование стора, добавить дебаунс
    const [title, setTitle] = useState('');

    return (
        <SelectWrapper label="Название" htmlFor="title">
            <Input
                id="title"
                value={title}
                onChange={setTitle}
                placeholder="Введите название"
            />
        </SelectWrapper>
    );
};
