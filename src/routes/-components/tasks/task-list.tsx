import { Button } from '@/components/button';
import { TaskItem } from '@/routes/-components/tasks/task-item';
import { PlusIcon } from '@phosphor-icons/react';

const TaskList = () => {
  return (
    <>
      <Button size="full">
        <PlusIcon /> Nova Tarefa
      </Button>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
};

export { TaskList };
