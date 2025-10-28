import { Container } from '@/components/container';
import { TaskItem } from '@/routes/-components/tasks/task-item';
import { TasksSummary } from '@/routes/-components/tasks/task-summary';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container as="article" className="space-y-3">
      <TasksSummary />
      <TaskItem />
    </Container>
  );
}
