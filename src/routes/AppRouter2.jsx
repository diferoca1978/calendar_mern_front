import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { AuthLayout, MainLayout } from '../layout';
import { ErrorPage } from '../shared';
import { ProtectedRoutes } from './ProtectedRoutes';
import { CalendarPage } from '../calendar/pages/CalendarPage';
import { AboutPage } from '../calendar/pages/AboutPage';
import { Loginpage, Profilepage, Registerpage } from '../auth/pages';
import { AuthRedirect } from './AuthRedirect';
//import { AuthRedirect } from './AuthRedirect';

const routes = createRoutesFromElements(
  <Route element={<AuthRedirect />}>
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route element={<ProtectedRoutes />}>
        <Route index element={<CalendarPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Route>

    <Route path="auth" element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route path="login" element={<Loginpage />} />
      <Route path="register" element={<Registerpage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<Profilepage />} />
      </Route>
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);
