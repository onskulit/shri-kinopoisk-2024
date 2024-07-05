import { FC, PropsWithChildren } from 'react';
import { Metadata } from 'next';

import { LayoutProvider } from '@components/LayoutProvider';

import './globals.css';

export const metadata: Metadata = {
    title: 'Фильмопоиск',
};

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ru">
            <body>
                <LayoutProvider>{children}</LayoutProvider>
                <div id="dropdowns" />
            </body>
        </html>
    );
};

export default AppLayout;
