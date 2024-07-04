'use client';

import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { PageHeader } from '@components/PageHeader';
import { store } from '@store/store';

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>
        <PageHeader />
        {children}
    </Provider>
);
