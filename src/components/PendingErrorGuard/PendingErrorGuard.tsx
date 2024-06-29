import { FC, PropsWithChildren } from 'react';

import { ErrorText } from '@components/ErrorText';
import { Spinner } from '@components/Spinner';

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
                <ErrorText />
            ) : (
                <>{children}</>
            )}
        </>
    );
};
