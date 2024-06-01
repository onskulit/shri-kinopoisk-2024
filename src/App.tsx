import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/main';
import { MoviePage } from '@pages/movie';

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
    return <RouterProvider router={router} />;
}

export default App;
