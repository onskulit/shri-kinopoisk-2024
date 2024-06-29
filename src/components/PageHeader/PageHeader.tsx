import { useEffect } from 'react';
import cn from 'classnames';

import { Header } from '@components/Header';
import { LocalStorageKey } from '@helpers/localStorage';
import { setIsAuthorized } from '@store/authorizationSlice';
import { useAppDispatch } from '@store/store';

import { AuthorizationControl } from './AuthorizationControl/AuthorizationControl';

import styles from './PageHeader.module.css';

export const PageHeader = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem(LocalStorageKey.Token)) {
            dispatch(setIsAuthorized(true));
        }
    }, []);

    return (
        <header className={cn(styles.header)}>
            <Header as="h1" isUnselectable>
                Фильмопоиск
            </Header>
            <AuthorizationControl />
        </header>
    );
};
