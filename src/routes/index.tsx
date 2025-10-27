import { Container } from '@/components/container';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>Home Page</div>
    </Container>
  );
}
