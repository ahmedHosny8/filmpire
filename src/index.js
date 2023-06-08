import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import ErrorPage from './ErrorPage';
import HomePage from './pages/HomePage';
import ActorsPage from './pages/ActorsPage';
import MovieInfoPage from './pages/MovieInfoPage';
import ProfilePage from './pages/ProfilePage';
import ToggleColorMode from './utils/ToggleColorMode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/approved',
        element: <HomePage />,
      },
      {
        path: '/movie/:id',
        element: <MovieInfoPage />,
      },
      {
        path: '/actors/:id',
        element: <ActorsPage />,
      },
      {
        path: '/profile/:id',
        element: <ProfilePage />,
      },
    ],
  },
]);

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <ToggleColorMode>
      <RouterProvider router={router} />
    </ToggleColorMode>
  </Provider>
);
