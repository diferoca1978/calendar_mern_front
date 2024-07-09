import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAuthStore } from './hooks';
import { router } from './routes/AppRouter2';

export const CalendarApp = () => {
  const { checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
