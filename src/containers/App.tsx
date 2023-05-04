import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Layout } from 'containers/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'page-1',
        element: <h1>Page 1</h1>,
      },
      {
        path: 'page-2',
        element: <h1>Page 2</h1>,
      },
      {
        path: 'page-3',
        element: <h1>Page 3</h1>,
      },
      {
        path: 'page-4',
        element: <h1>Page 4</h1>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
