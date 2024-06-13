import { Outlet } from 'react-router-dom';
import { AuthNavBar, Footer } from '../shared';

export const AuthLayout = () => {
  return (
    <>
      <header>
        <AuthNavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
