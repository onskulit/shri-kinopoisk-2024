import { useCallback } from 'react';
import { AuthorizationModal } from '@components/AuthorizationModal';
import { Button } from '@components/Button';
import { Text } from '@components/Text';
import { UserIcon } from '@components/UserIcon';
import { LocalStorageKey } from '@helpers/localStorage';
import {
    openAuthorizationModal,
    setIsAuthorized,
} from '@store/authorizationSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

import styles from './AuthorizationControl.module.css';

export const AuthorizationControl = () => {
    const dispatch = useAppDispatch();
    const isAuthorized = useAppSelector(
        (state) => state.authorization.isAuthorized
    );

    const onButtonClick = useCallback(() => {
        if (isAuthorized) {
            localStorage.removeItem(LocalStorageKey.Token);
            dispatch(setIsAuthorized(false));
        } else {
            dispatch(openAuthorizationModal());
        }
    }, [dispatch, isAuthorized]);

    return (
        <>
            <div className={styles.container}>
                <UserIcon />
                <Button color="primary" size="m" onClick={onButtonClick}>
                    <Text size="s" color="light" weight="medium">
                        {isAuthorized ? 'Выйти' : 'Войти'}
                    </Text>
                </Button>
                <AuthorizationModal />
            </div>
        </>
    );
};
