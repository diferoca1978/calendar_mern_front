import { RouterProvider } from 'react-router-dom';
import { route } from './routes/AppRouter';

export const CalendarApp = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};
