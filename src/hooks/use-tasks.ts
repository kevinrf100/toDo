import { TASKS_STORAGE_KEY, type Task } from '@/models/task';
import { delay } from '@/utils/utils';
import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

export const useTasks = () => {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      if (isLoadingTasks) {
        await delay(2000);
        setIsLoadingTasks(false);
      }

      setTasks(tasksData);
    };

    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    isLoadingTasks,
    tasksCount: tasks.filter((tasks) => !(tasks.state === 'created')).length,
    completedTasksCount: tasks.filter((task) => task.completed).length,
    setTasks,
  };
};
