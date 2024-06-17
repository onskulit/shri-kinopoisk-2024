import { FC, PropsWithChildren } from 'react';

import { Spinner } from '@components/Spinner/Spinner';
import { Text } from '@components/Text';
import { ERROR_TEXT } from '@helpers/consts';

import styles from './PendingErrorGuard.module.css';

type PendingErrorGuardProps = {
    loaderSize?: number;
    isLoading: boolean;
    isError: boolean;
};

export const PendingErrorGuard: FC<
    PropsWithChildren<PendingErrorGuardProps>
> = ({ children, isLoading, isError, loaderSize }) => {
    return (
        <>
            {isLoading ? (
                <div className={styles.pending}>
                    <Spinner size={loaderSize} />
                </div>
            ) : isError ? (
                <Text size="xxs" className={styles.error}>
                    {ERROR_TEXT}
                </Text>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
