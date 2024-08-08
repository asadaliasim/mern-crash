import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <div>{userInfo ? <Outlet /> : <Navigate to="/login" replace />}</div>;
};

export default PrivateRoute;
