import { Container } from '@/components/container';
import { TaskList } from '@/routes/-components/tasks/task-list';
import { TasksSummary } from '@/routes/-components/tasks/task-summary';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container as="article" className="space-y-3">
      <TasksSummary />
      <TaskList />
    </Container>
  );
}
