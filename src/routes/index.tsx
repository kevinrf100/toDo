import { Container } from '@/components/container';
import { TasksSummary } from '@/routes/-components/tasks-summary';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container as="article">
      <TasksSummary />
    </Container>
  );
}
