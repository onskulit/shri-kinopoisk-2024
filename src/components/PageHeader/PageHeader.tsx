import cn from 'classnames';
import { Header } from '@components/Header';
import { AuthorizationControl } from './AuthorizationControl/AuthorizationControl';

import styles from './PageHeader.module.css';

export const PageHeader = () => (
    <header className={cn(styles.header)}>
        <Header as="h1" isUnselectable>
            Фильмопоиск
        </Header>
        <AuthorizationControl />
    </header>
);
