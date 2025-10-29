const TASKS_STORAGE_KEY = 'TASKS';

type TaskStatus = 'created' | 'completed' | 'cancelled';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  state?: TaskStatus;
};

export { TASKS_STORAGE_KEY };
export type { Task, TaskStatus };
