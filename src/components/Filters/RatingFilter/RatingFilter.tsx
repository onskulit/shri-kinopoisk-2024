import { FC, useState } from 'react';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { SelectWrapper } from '@components/SelectWrapper/SelectWrapper';

// TODO: переделать, когда появится ручка
const ratingMap = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
};

export const RatingFilter: FC = () => {
    const [rating, setRating] = useState('');

    return (
        <SelectWrapper label="Рейтинг">
            <Dropdown
                isLoading={false}
                selectedKey={rating}
                items={ratingMap}
                setSelectedValue={setRating}
                placeholder="Выберите рейтинг"
            />
        </SelectWrapper>
    );
};
