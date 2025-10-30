import { Badge } from '@/components/badge';
import { Text } from '@/components/text';
import { useTasks } from '@/hooks/use-tasks';

const TasksSummary = () => {
  const { completedTasksCount, tasksCount } = useTasks();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" color="gray-300">
          Tasks created
        </Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" color="gray-300">
          Done
        </Text>
        <Badge variant="primary">
          {completedTasksCount} of {tasksCount}
        </Badge>
      </div>
    </div>
  );
};

export { TasksSummary };
