import { TASKS_STORAGE_KEY, type Task } from '@/models/task';
import useLocalStorage from 'use-local-storage';

const useTask = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);

  const prepareTask = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: '',
        completed: false,
        state: 'created',
      },
    ]);
  };

  return {
    prepareTask,
  };
};

export { useTask };
