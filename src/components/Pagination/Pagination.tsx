import { FC } from 'react';

import { NavigationButton } from '@components/NavigationButton';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

import styles from './Pagination.module.css';

type PaginationProps = {
    totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
    const { param, setSearchParams } = useSetSearchParams('page');

    const currentPage = param ? parseInt(param) : 1;

    // пагинацию не показываем, если всего 1 страница
    if (currentPage === 1 && currentPage === totalPages) {
        return null;
    }

    const prevPageDisabled = !currentPage || currentPage === 1;
    const nextPageDisabled = totalPages === currentPage;

    const handlePrevPageClick = () => {
        if (!currentPage || prevPageDisabled) {
            return;
        }

        setSearchParams(`${currentPage - 1}`);
    };

    const handleNextPageClick = () => {
        if (!currentPage || nextPageDisabled) {
            return;
        }

        setSearchParams(`${currentPage + 1}`);
    };

    return (
        <div className={styles.container}>
            <NavigationButton
                size="s"
                type="prev"
                onClick={handlePrevPageClick}
                isDisabled={prevPageDisabled}
            />
            <span>{currentPage || 1}</span>
            <NavigationButton
                size="s"
                type="next"
                onClick={handleNextPageClick}
                isDisabled={nextPageDisabled}
            />
        </div>
    );
};
