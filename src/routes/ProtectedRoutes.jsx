import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const ProtectedRoutes = ({ children }) => {
  const { status } = useAuthStore();

  if (status === 'not-authenticated') {
    return <Navigate to="/auth/login" replace />;
  }
  return children ? children : <Outlet />;
};
