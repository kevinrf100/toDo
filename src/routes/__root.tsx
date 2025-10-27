import { Footer } from '@/routes/-components/footer';
import { Header } from '@/routes/-components/header';
import { MainContent } from '@/routes/-components/main-content';
import { createRootRoute, Outlet } from '@tanstack/react-router';

const RootLayout = () => {
  return (
    <>
      <Header />
      <MainContent children={<Outlet />} />
      <Footer />
    </>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
