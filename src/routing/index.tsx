import { createBrowserRouter } from 'react-router-dom';

import Error from '../pages/Error';
import GameDetails from '../pages/GameDetails';
import Homepage from '../pages/Home';
import Layout from '../pages/Layout';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, errorElement: <Error />, children: [
    { index: true, element: <Homepage /> },
    { path: 'games/:id', element: <GameDetails /> }
  ] }
]);

export default router;