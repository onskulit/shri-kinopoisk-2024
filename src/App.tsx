import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { MainPage } from '@pages/main';
import { MoviePage } from '@pages/movie';
import { PageHeader } from '@components/PageHeader';
import { useAppDispatch } from '@store/store';
import { setIsAuthorized } from '@store/authorizationSlice';
import { LocalStorageKey } from '@helpers/localStorage';

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
        if (localStorage.getItem(LocalStorageKey.Token)) {
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
