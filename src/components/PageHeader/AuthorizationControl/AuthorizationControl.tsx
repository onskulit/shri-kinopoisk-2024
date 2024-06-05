import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store/store';
import {
    closeAuthorizationModal,
    openAuthorizationModal,
} from '@store/authorizationSlice';
import { Modal } from '@components/Modal';
import { Button } from '@components/Button';
import { Text } from '@components/Text';
import { UserIcon } from '@components/UserIcon';

import styles from './AuthorizationControl.module.css';

export const AuthorizationControl = () => {
    const isModalOpen = useSelector(
        (state: RootState) => state.authorization.isOpen
    );
    const dispatch = useDispatch();

    const onButtonClick = useCallback(() => {
        dispatch(openAuthorizationModal());
    }, [dispatch]);

    const onModalClose = useCallback(() => {
        dispatch(closeAuthorizationModal());
    }, [dispatch]);

    return (
        <>
            <div className={styles.container}>
                <UserIcon />
                <Button color="primary" size="m" onClick={onButtonClick}>
                    <Text size="s" color="light" weight="medium">
                        Войти
                    </Text>
                </Button>
            </div>
            <Modal
                isOpen={isModalOpen}
                title={'Авторизация'}
                onClose={onModalClose}
            >
                Форма авторизации
            </Modal>
        </>
    );
};
