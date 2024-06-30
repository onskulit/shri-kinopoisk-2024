import Link from 'next/link';

import { Header } from '@components/Header';

import styles from './NotFound.module.css';

export const NotFound = () => (
    <section className={styles.container}>
        <Header as="h2">Страница не найдена</Header>
        <Link href="/">Вернуться на главную</Link>
    </section>
);
