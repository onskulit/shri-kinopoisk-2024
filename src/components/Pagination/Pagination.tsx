'use client';

import { FC } from 'react';

import { NavigationButton } from '@components/NavigationButton';
import { Text } from '@components/Text';
import { setScrollToTop } from '@helpers/setScrollToTop';
import { useSetSearchParams } from '@hooks/useSetSearchParams';

import styles from './Pagination.module.css';

type PaginationProps = {
    totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
    const { param, setSearchParams } = useSetSearchParams('page');

    const currentPage = param ? parseInt(param, 10) : 1;

    // пагинацию не показываем, если всего 1 страница
    if (currentPage === 1 && currentPage === totalPages) {
        return null;
    }

    const prevPageDisabled = !currentPage || currentPage === 1;
    const nextPageDisabled = totalPages === currentPage;

    const onPrevPageClick = () => {
        if (!currentPage || prevPageDisabled) {
            return;
        }

        setSearchParams(`${currentPage - 1}`);
        setScrollToTop();
    };

    const onNextPageClick = () => {
        if (!currentPage || nextPageDisabled) {
            return;
        }

        setSearchParams(`${currentPage + 1}`);
        setScrollToTop();
    };

    return (
        <div className={styles.container}>
            <NavigationButton
                size="s"
                type="prev"
                onClick={onPrevPageClick}
                isDisabled={prevPageDisabled}
            />
            <Text size="xxs" as="span">
                {currentPage || 1}
            </Text>
            <NavigationButton
                size="s"
                type="next"
                onClick={onNextPageClick}
                isDisabled={nextPageDisabled}
            />
        </div>
    );
};
