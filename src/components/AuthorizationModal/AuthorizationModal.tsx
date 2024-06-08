import { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@store/store';
import { closeAuthorizationModal, loginUser } from '@store/authorizationSlice';
import { Modal } from '@components/Modal';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

const validateUsername = (username: string) => {
    if (!username) {
        return 'Введите логин';
    }
};

const validatePassword = (password: string) => {
    if (!password) {
        return 'Введите пароль';
    }
};

export const AuthorizationModal = () => {
    const [username, setUsername] = useState('');
    const [usernameValidationError, setUsernameValidationError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidationError, setPasswordValidationError] = useState('');

    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector((state) => state.authorization.isOpen);
    const isLoading = useAppSelector((state) => state.authorization.isLoading);

    const onUsernameChange = useCallback(
        (value: string) => {
            setUsernameValidationError('');
            setUsername(value);
        },
        [setUsername, setUsernameValidationError]
    );
    const onPasswordChange = useCallback(
        (value: string) => {
            setPasswordValidationError('');
            setPassword(value);
        },
        [setPassword, setPasswordValidationError]
    );
    const onButtonClick = useCallback(() => {
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);
        if (usernameError) {
            setUsernameValidationError(usernameError);
        }
        if (passwordError) {
            setPasswordValidationError(passwordError);
        }
        if (!usernameError && !passwordError) {
            dispatch(
                loginUser({
                    username,
                    password,
                })
            );
        }
    }, [
        username,
        password,
        dispatch,
        setUsernameValidationError,
        setPasswordValidationError,
    ]);

    const onModalClose = useCallback(() => {
        setUsernameValidationError('');
        setPasswordValidationError('');
        dispatch(closeAuthorizationModal());
    }, [dispatch, setUsernameValidationError, setPasswordValidationError]);

    return (
        <Modal
            isOpen={isModalOpen}
            title={'Авторизация'}
            onClose={onModalClose}
        >
            <Input
                value={username}
                onChange={onUsernameChange}
                placeholder="Введите логин"
                error={usernameValidationError}
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                placeholder="Введите пароль"
                type="password"
                error={passwordValidationError}
            />
            <Button
                size="s"
                color="primary"
                onClick={onButtonClick}
                isDisabled={isLoading}
            >
                Войти
            </Button>
        </Modal>
    );
};
