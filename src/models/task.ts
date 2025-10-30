const TASKS_STORAGE_KEY = 'TASKS';

type TaskStatus = 'created' | 'in_progress' | 'completed' | 'cancelled';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  state?: TaskStatus;
};

export { TASKS_STORAGE_KEY };
export type { Task, TaskStatus };
