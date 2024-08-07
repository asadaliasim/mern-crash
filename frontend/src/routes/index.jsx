import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

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
        path: '/login',

        element: <LoginScreen />,
      },
      {
        path: '/register',

        element: <RegisterScreen />,
      },

      {
        path: '*',
        element: <div>page not found</div>,
      },
    ],
  },
]);
export default router;
