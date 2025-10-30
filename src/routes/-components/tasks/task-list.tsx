import { Button } from '@/components/button';
import { useTask } from '@/hooks/use-task';
import { useTasks } from '@/hooks/use-tasks';
import { TaskItem } from '@/routes/-components/tasks/task-item';
import { PlusIcon } from '@phosphor-icons/react';

const TaskList = () => {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  const handleNewTask = () => {
    prepareTask();
  };

  return (
    <>
      <Button
        size="full"
        onClick={handleNewTask}
        disabled={tasks.some((task) => task.state === 'created')}
      >
        <PlusIcon /> Nova Tarefa
      </Button>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
};

export { TaskList };
