import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PageHeader } from '@components/PageHeader';
import { LocalStorageKey } from '@helpers/localStorage';
import { MainPage } from '@pages/main';
import { MoviePage } from '@pages/movie';
import { setIsAuthorized } from '@store/authorizationSlice';
import { useAppDispatch } from '@store/store';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/movie/:id',
        element: <MoviePage />,
    },
]);

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem(LocalStorageKey.AuthToken)) {
            dispatch(setIsAuthorized(true));
        }
    }, []);

    return (
        <>
            <PageHeader />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
