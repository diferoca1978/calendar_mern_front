import { Outlet } from 'react-router-dom';
import { Footer, MainNavBar } from '../shared';

export const MainLayout = () => {
  return (
    <>
      <header>
        <MainNavBar />
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
