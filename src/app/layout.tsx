import { FC, PropsWithChildren } from 'react';

import { LayoutProvider } from '@components/LayoutProvider';

import './globals.css';

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
