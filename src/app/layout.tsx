'use client';

import './globals.css';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { PageHeader } from '@components/PageHeader';
import { store } from '@store/store';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ru">
            <body>
                <Provider store={store}>
                    <PageHeader />
                    {children}
                </Provider>
                <div id="dropdowns" />
            </body>
        </html>
    );
};

export default AppLayout;
