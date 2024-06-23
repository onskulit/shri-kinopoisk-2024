import cn from 'classnames';

import { Header } from '@components/Header';

import { AuthorizationControl } from './AuthorizationControl/AuthorizationControl';

import styles from './PageHeader.module.css';
import { LocalStorageKey } from '@helpers/localStorage';
import { setIsAuthorized } from '@store/authorizationSlice';
import { useAppDispatch } from '@store/store';
import { useEffect } from 'react';

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
