import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('accessToken') !== null;
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};
