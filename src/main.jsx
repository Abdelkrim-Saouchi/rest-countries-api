import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import FetchFailed from './components/FetchFailed.jsx';
import Layout from './components/Layout.jsx';
import DetailsPage, { loader as detailsLoader } from './pages/DetailsPage.jsx';
import Home, { loader as homeLoader } from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <FetchFailed />,
        loader: homeLoader,
      },
      {
        path: 'details',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
