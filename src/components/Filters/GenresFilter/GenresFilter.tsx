import { FC, useState } from 'react';

import { Dropdown } from '@components/Dropdown/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';

// TODO: переделать, когда появится ручка
const genresMap = {
    all: 'Все',
    fantasy: 'Фантастика',
    horror: 'Ужасы',
    action: 'Боевик',
    comedy: 'Комедия',
};

export const GenresFilter: FC = () => {
    const [genre, setGenre] = useState('');

    return (
        <SelectWrapper label="Жанр">
            <Dropdown
                isLoading={false}
                selectedKey={genre}
                items={genresMap}
                setSelectedValue={setGenre}
                placeholder="Выберите жанр"
            />
        </SelectWrapper>
    );
};
