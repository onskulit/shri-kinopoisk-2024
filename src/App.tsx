import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/main';
import { MoviePage } from '@pages/movie';
import { PageHeader } from '@components/PageHeader';

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
    return (
        <>
            <PageHeader />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
