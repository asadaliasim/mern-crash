import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PrivateRoute from '../components/PrivateRoute';

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
        element: <PrivateRoute />, // Protect all nested routes with PrivateRoute
        children: [
          {
            path: '/profile',
            element: <ProfileScreen />,
          },
          // other private routes
        ],
      },

      {
        path: '*',
        element: <div>page not found</div>,
      },
    ],
  },
]);
export default router;
