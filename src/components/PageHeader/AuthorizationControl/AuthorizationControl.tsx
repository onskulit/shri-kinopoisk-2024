import styles from './AuthorizationControl.module.css';
import { Button } from '@components/Button';
import { Text } from '@components/Text';
import { UserIcon } from '@components/UserIcon';
import { useCallback } from 'react';

export const AuthorizationControl = () => {
    const onButtonClick = useCallback(() => {
        console.log('click');
    }, []);

    return (
        <div className={styles.container}>
            <UserIcon />
            <Button color="primary" size="m" onClick={onButtonClick}>
                <Text size="s" color="light" weight="medium">
                    Войти
                </Text>
            </Button>
        </div>
    );
};
