import { createBrowserRouter } from 'react-router-dom';

import GameDetails from '../pages/GameDetails';
import Home from '../pages/Home';
import Layout from '../pages/Layout';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'games/:id', element: <GameDetails /> }
  ] }
]);

export default router;