import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import HomePage from './pages/HomePage';
import ActorsPage from './pages/ActorsPage';
import MovieInfoPage from './pages/MovieInfoPage';
import MoviesPage from './pages/MoviesPage';
import ProfilePage from './pages/ProfilePage';

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
        path: '/movies',
        element: <MoviesPage />,
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

root.render(<RouterProvider router={router} />);
