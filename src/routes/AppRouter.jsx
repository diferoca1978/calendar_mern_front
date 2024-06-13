import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainLayout, AuthLayout } from '../layout';
import { ErrorPage } from '../shared';
import { CalendarPage } from '../calendar/pages/CalendarPage';
import { Loginpage, Profilepage, Registerpage } from '../auth/pages';

export const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="calendar" index element={<CalendarPage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />} errorElement={<ErrorPage />}>
        <Route path="login" element={<Loginpage />} />
        <Route path="register" element={<Registerpage />} />
        <Route path="profile" element={<Profilepage />} />
      </Route>
    </>
  )
);
