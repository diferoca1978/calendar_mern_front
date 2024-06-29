import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/AppRouter';
import { useAuthStore } from './hooks';

export const CalendarApp = () => {
  const { checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};
