import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import FetchFailed from './components/FetchFailed.jsx';
import Layout from './components/Layout.jsx';
import CountryPage from './pages/CountryPage.jsx';
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
        path: 'country',
        element: <CountryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
