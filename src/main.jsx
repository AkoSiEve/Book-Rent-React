import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import TrendingBooks from './pages/trending/TrendingBooks';
import NewRealease from './pages/new-realease/NewRealease';
import UpcomingBooks from './pages/upcoming/UpcomingBooks';
import FavoritesBooks from './pages/favorite/FavoritesBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending-books",
        element: <TrendingBooks />,
      },
      {
        path: "/new-releases",
        element: <NewRealease />,
      },
      {
        path: "/upcoming-books",
        element: <UpcomingBooks />,
      },
      {
        path: "/favorite-books",
        element: <FavoritesBooks />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
