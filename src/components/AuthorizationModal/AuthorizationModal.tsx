import { useCallback, useState } from 'react';

import { Button } from '@components/Button';
import { FieldWrapper } from '@components/FieldWrapper';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';
import { Text } from '@components/Text';
import { closeAuthorizationModal, loginUser } from '@store/authorizationSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

import styles from './AuthorizationModal.module.css';

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

const RequiredMark = () => {
    return (
        <Text color="error" size="xxs">
            *
        </Text>
    );
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
    const onSubmitButtonClick = useCallback(() => {
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
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <FieldWrapper label="Логин" labelAddon={<RequiredMark />}>
                        <Input
                            value={username}
                            onChange={onUsernameChange}
                            placeholder="Введите логин"
                            error={usernameValidationError}
                        />
                    </FieldWrapper>

                    <FieldWrapper label="Пароль" labelAddon={<RequiredMark />}>
                        <Input
                            value={password}
                            onChange={onPasswordChange}
                            placeholder="Введите пароль"
                            type="password"
                            error={passwordValidationError}
                        />
                    </FieldWrapper>
                </div>

                <div className={styles.buttons}>
                    <Button
                        size="s"
                        color="primary"
                        onClick={onSubmitButtonClick}
                        isDisabled={isLoading}
                    >
                        <Text size="xxs" color="light">
                            Войти
                        </Text>
                    </Button>
                    <Button
                        size="s"
                        color="transparent"
                        onClick={() => {
                            dispatch(closeAuthorizationModal());
                        }}
                    >
                        <Text size="xxs" color="primary">
                            Отменить
                        </Text>
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
