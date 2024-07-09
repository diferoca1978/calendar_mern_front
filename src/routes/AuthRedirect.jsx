/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const AuthRedirect = ({ children }) => {
  const { status } = useAuthStore();
  const location = useLocation();

  if (status === 'authenticated' && location.pathname === '/auth/login') {
    return <Navigate to="/" replace />;
  }

  if (status === 'authenticated' && location.pathname === '/auth/register') {
    return <Navigate to="/auth/profile" replace />;
  }

  if (
    status === 'not-authenticated' &&
    !['/auth/login', '/auth/register'].includes(location.pathname)
  ) {
    return <Navigate to="/auth/login" replace />;
  }

  return children ? children : <Outlet />;
};
