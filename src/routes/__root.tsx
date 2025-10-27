import { Container } from '@/components/container';
import { createRootRoute, Outlet } from '@tanstack/react-router';

const RootLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
