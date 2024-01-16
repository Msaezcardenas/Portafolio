import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, About, Proyects } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/proyects',
    element: <Proyects />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
