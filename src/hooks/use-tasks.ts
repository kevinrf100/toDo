import { TASKS_STORAGE_KEY, type Task } from '@/models/task';
import useLocalStorage from 'use-local-storage';

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    completedTasksCount: tasks.filter((task) => task.completed).length,
    setTasks,
  };
};
