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

  const updateTask = (id: string, payload: { title: Task['title'] }) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: 'in_progress', title: payload.title }
          : task,
      ),
    );
  };

  const updateTaskStatus = (id: string, completed: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed,
              state: completed ? 'completed' : 'in_progress',
            }
          : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
  };
};

export { useTask };
