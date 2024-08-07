import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

import HomeScreen from '../screens/HomeScreen';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomeScreen />,
      },

      {
        path: '*',
        element: <div>page not found</div>,
      },
    ],
  },
]);
export default router;
