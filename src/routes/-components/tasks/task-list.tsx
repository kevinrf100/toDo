import { Button } from '@/components/button';
import { useTask } from '@/hooks/use-task';
import { useTasks } from '@/hooks/use-tasks';
import type { Task } from '@/models/task';
import { TaskItem } from '@/routes/-components/tasks/task-item';
import { PlusIcon } from '@phosphor-icons/react';

const TaskList = () => {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  const handleNewTask = () => {
    prepareTask();
  };

  return (
    <>
      <Button
        size="full"
        onClick={handleNewTask}
        disabled={
          tasks.some((task) => task.state === 'created') || isLoadingTasks
        }
      >
        <PlusIcon /> Nova Tarefa
      </Button>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
};

export { TaskList };
